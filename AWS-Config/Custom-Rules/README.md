# AWS Config Custom Rules

Custom Config rules need some addtional resources to be deployed along with rule itself.
1. AWS config rule `AWS::Config::ConfigRule`
2. Custom Lambda function having logic for custom rule `AWS::Lambda::Function`
3. Lambda invoke permission for config service `AWS::Lambda::Permission`
4. An IAM role for lambda having config rule execution and all necessary permissions `AWS::IAM::Role`

Above resources are needed for a single custom rule to work [more info](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html). Find a sample CloudFormation template file named **Sample-Custom-Rule.template** above.

#### AWS Config RDK ( Rules Development Kit )
The best way to implement, test, and deploy Custom Config rules is using [AWS Config RDK](https://github.com/awslabs/aws-config-rdk) (Rules Development Kit), a tool provided by AWS. It minimises the heavy lifting involved for creating code, CloudFormation template, deployment, and managing changes in any component of the rule. You just have to update the logic needed for rule evaluation. 

----