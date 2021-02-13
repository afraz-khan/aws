## AWS Config

#### AWS Config Rules Deployment
  There are multiple ways to deploy config rules available [here](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html) based on use-case. Deploying individual rules one by one is quite a time consuming especially when you have hundreds of accounts in your AWS environment. Following methods mostly are used i.e. 
  
  1. To deploy rules across all accounts in an organization, AWS **Firewall Manager** can be used.
  1. To deploy multiple rules at a single time in one account, AWS Config **Comformance Packs** can be used for better hierarchy/grouping.
  1. Custom **CloudFormation** templates can be built having multiple config rules.
  
   **NOTE:** Rules can be managed or custom. But for custom rules, there may be some extra properties to be configured.
   
 #### Deploy Managed Rules
   - Individual Rules can be easily deployed in form of CloudFormation stacks using the following official s3 template URL.
     
   		>s3.amazonaws.com/aws-configservice-us-east-1/cloudformation-templates-for-managed-rules/**[ THE_RULE_IDENTIFIER ]**.template
     
       Find Identifier for each managed rule [here](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html).
     
   - To deploy multiple managed config rules, a sample CloudFormation template file is given in directory above named **Deploy-Multiple-Managed-Rules.template**. This template has merged template resources for following managed config rules.
     	1. IAM_ROOT_ACCESS_KEY_CHECK
     	2. S3_BUCKET_VERSIONING_ENABLED
     	3. SUBNET_AUTO_ASSIGN_PUBLIC_IP_DISABLED
     	4. S3_DEFAULT_ENCRYPTION_KMS
     	5. EC2_EBS_ENCRYPTION_BY_DEFAULT
  
  		**Note**: Above mentioned s3 endpoint is used to get CloudFormation template of individual managed rules to save time.
        
  - **Deploy-Multiple-Managed-Rules.template** can also be used as **TemplateBody** for a Config Conformance Pack. Sample Conformance Pack is given in **SampleConformancePack.yaml** file present in directory.