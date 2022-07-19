import boto3
import json
import os

print('loading function...')

# create the client outside of the handler
region_name = os.getenv('REGION_NAME')
dynamo = boto3.client('dynamodb', region_name=region_name)
table_name = os.getenv('TABLE_NAME')

def respond(err, res=None):
	return {
		'statusCode': '400' if err else '200',
		'body': err.message if err else json.dumps(res),
		'headers': {
			'Content-Type': 'application/json',
		},
	}

def lambda_handler(event, context):
	print('Received event: ' + json.dumps(event, indent=2))
	result = dynamo.scan(TableName=table_name)
	return respond(None, res=result)