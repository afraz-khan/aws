### Monitor Root User Activity via CloudTrail

CloudTrail has 2 types of API calls which have to be captured for detecting root activity in an AWS account. One is console login and other one is all post login actions. Given template captures both of these event types and notifies user about root activity in a single AWS region.

All global/region-less API calls including **AWS Console Login** land in `us-east-1` region by default, so above template should be deployed in `us-east-1` for sure. Also deploy the template in all other regions to detect root user API calls across whole account and also to achieve 100% security for your account.

----

#### Prerequisites
- Create a multi region _**Trail**_ in CloudTrail, for which Cloudwatch logs are enabled and read/write operations are also enabled for _**management events**_ because mangement events are filtered to detect root activity.

#### Resources
Template solution has following major resources;
1. A CloudWatch **EventsRule** to detect root api calls via cloudtrail events.
2. An **SNS-Topic** to publish root activity alerts to subscribed emails.
3. A **lambda Function** which is invoked by eventrule. That function creates a custom email message and publishes that message to SNS topic created.
4. An **IAM Role** for lambda function having necessary permissions to publish message and produce cloudwatch logs. 
5. Also template have a **WaitCondition** for Lambda function's IAM role dependency. Since IAM Role is a global/region-less resource, so this WaitCondition avoids re-deployment of a new IAM Role and lets lambda function (in each region) use already present IAM role.

#### Deployment

- Deploy template in `us-eat-1` region at first (mandatory for Root Login detection). Use `false` for parameter _**MultiRegionDeployment**_ since this will be 1st ever deployment in any region of your account and global resouces like IAM Role would be created at once with 1st deployment.
	
	> NOTE: Even if you don't use `us-east-1` as your 1st region to deploy solution to. Still use `false` for parameter _**MultiRegionDeployment**_. As its mandatory for global resources deployment.

- After 1st deployment in `us-east-1`, deploy solution in any other region in which you want root user activity to be monitored and make sure now you use value `true` for paramter _**MultiRegionDeployment**_ so that global resources wouldn't be created again.
- Ideally deploy solution in all regions for 100% security.

----