## CloudFormation Custom Resources

Custom resources enable you to write custom provisioning logic in templates that AWS CloudFormation runs anytime you create, update (if you changed the custom resource), or delete stacks.
For example:
1. You might want to include resources that aren't available as AWS CloudFormation resource types. You can include those resources by using custom resources. That way you can still manage all your related resources in a single stack.
2. If you have systems located out of aws cloud or you might have hybrid cloud then you may want
to deploy lets say resources in Azure cloud along with AWS.

Use the **AWS::CloudFormation::CustomResource** or **Custom::**_**MyCustomResourceTypeName**_ resource type to define custom resources in your templates. Custom resources require one property: the service token, which specifies where AWS CloudFormation sends requests to, such as an Amazon SNS topic.

More --> https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html

### Example
Find a CloudFormation template [here](https://github.com/afraz-khan/aws/blob/main/Sample-Templates/Custom-Resources/cross-site-cloudformation.yml). 
- This template will read some terraform outputs from a terraform state file. File is hosted on an S3 bucket. This work is done using a Lambda based Custm Resource which runs the code to read the outputs. 
- CloudFormation template exports those terraform outputs tobe used in cloudformation based infra.
---