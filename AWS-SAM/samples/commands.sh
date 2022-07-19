# craete an s3 bucket OPTIONAL, you can create from console
aws s3 mb s3://{bucket-name}

# 1. package cloudformation
aws cloudformation package --s3-bucket {bucket-name} --template-file {sam-template-file-path} --output-template-file gen/template-generated.yml

# 2. deploy
aws cloudformation deploy --template-file /home/afrazkhan/work/sam/gen/template-generated.yml --capabilities CAPABILITY_IAM --stack-name {cf-stack-name}