## AWS Config Remediation

AWS Config allows you to remediate non-compliant resources that are evaluated by AWS Config Rules. AWS Config applies remediation using [AWS Systems Manager Automation documents](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html). These documents define the actions to be performed on noncompliant AWS resources evaluated by AWS Config Rules.  
AWS Config provides a set of managed automation documents with remediation actions. You can also create and associate custom automation documents with AWS Config rules.
Visit [here](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html) for Custom SSM Automation Docs development.

### AWS Managed Config Remediations
There is a sample AWS Config Remediation setup in the CloudFormation template above named **IAM-Unused-Credentials-Rule.yaml.yaml**. It has the following resources:

- A Managed Config Rule named **IAM_USER_UNUSED_CREDENTIALS_CHECK**. It basically looks for unused IAM User credentials which are not used for a given number of days.
- A Managed Remediation attached with Config rule that uses a managed SSM Automation Document.
- An IAM role required for SSM Automation Document.
	
	> Since every SSM Automation Document needs a different set of permissions based on its task, so actions to be allowed for IAM policies in the above IAM Role should be evaluated through some testing or looking at the steps Automation Doc is about to perform.