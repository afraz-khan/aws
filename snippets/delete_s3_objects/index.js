const { S3Client, ListObjectVersionsCommand, 
	DeleteObjectsCommand, ListObjectsCommand } = require("@aws-sdk/client-s3");
const fs = require('fs');

const client = new S3Client({ region: "us-east-1" });

const listObjects = () => {
	const command = new ListObjectsCommand({
		Bucket: BUCKET,
		Delimiter: ',',
		Prefix: PREFIX
	})

	return client.send(command)
}

const listObjectVersions = () => {
	const command = new ListObjectVersionsCommand({
		Bucket: BUCKET,
		Delimiter: ',',
		Prefix: PREFIX
	})

	return client.send(command)
}

const generateDeleteData = (objectsData) => {
	const data = {
		Objects: []
	}

	objectsData.map(x => {
		const objMeta = {
			Key: x.Key
		};

		if(WITH_VERSIONS || WITH_DELETE_MARKERS){
			objMeta['VersionId'] = x.VersionId
		}

		data.Objects.push(objMeta)
	})

	fs.writeFile('delete.json', JSON.stringify(data), (err) => {
		if (err) throw err;
		console.log('Saved!')
	})
}

const deleteObjects = () => {
	const deleteContainer = JSON.parse(fs.readFileSync('delete.json'));

	const command = new DeleteObjectsCommand({
		Bucket: BUCKET,
		Delete: deleteContainer
	});

	return client.send(command);
}

const execListObjectsCommand = async () => {
	let result = [];

	if(!WITH_DELETE_MARKERS && !WITH_VERSIONS){
		const data = await listObjects();

		if(data.Contents){
			result = data.Contents;
		}
	}
	else{
		const data = await listObjectVersions();
		
		if(WITH_VERSIONS && data.Versions){	
			result = data.Versions;
		}

		if(WITH_DELETE_MARKERS && data.DeleteMarkers){
			result = result.concat(data.DeleteMarkers);
		}
	}

	generateDeleteData(result);
}

const main = async () => {
	const command = process.argv[2];

	switch (command) {
		case 'list-objects':
			await execListObjectsCommand();
			break;

		case 'delete-objects':
			await deleteObjects();
			break;

		default:
			break;
	}
}

/**
 * In S3 buckets, objects transit through 3 types.
 * 
 * Standard Objects with no versions.
 * Objects having version id attached.
 * Objects having Delete Marker attached.
 * 
 * You have to delete all of these separately if they exist.
 */

const BUCKET = 'thesite-staging-cf-templates';
const PREFIX = '.git';
const WITH_VERSIONS = true
const WITH_DELETE_MARKERS = true

/**
 * You first need to list all the objects using list command.
 * Thenm use delete command to delete the listed objects.
 * 
 * Use below args with "node index.js" command.
 * 
 * Command Arguments
 * -----------------
 * list-objects
 * delete-objects
 */

main();