
#######################################################################
Given python script fetches EC2 instance tags from a single AWS Account
and saves to a json file.

-) Requirements
    - Create an IAM User with EC2 Read Only permissions and having programmatic access.
    - Setup AWS CLI using Access Keys for that new user and if it works.
    - Download python3 for your particular OS.
    - Install Python SDK for AWS named boto3 through pip.

-) Execution
    There are 2 methods to fetch tags using this script. 
    
    1) Fetch all tags
        - You can fetch tags for all EC2 instances in your AWS Account. just use following command:
          "$ python get_ec2_tags.py"
        - results will be saved in file named 'ec2_tags.json'.
    2) Selective instances
        - You can fetch tags for selective EC2 instances. Just create a new txt file and put 
          instance ids line by line in the file. Don't leave white spaces or unnecessary chars in file.
        - Use following command with a filename argument containing instance ids:
          "$ python get_ec2_tags.py instance_ids.txt"