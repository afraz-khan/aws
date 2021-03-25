import boto3
import sys
import json
import os

ec2 = boto3.resource('ec2')

def get_all_instances_tags():
    
    ec2_instances = list(ec2.instances.all())
    instances_count = len(ec2_instances)
    if instances_count > 0:

        output_obj = []
        for instance in ec2.instances.all():
            instance_obj = {
                'Instance-id' : instance.id,
                'Tags': instance.tags
            }
            output_obj.append(instance_obj)
        
        with open('ec2_tags.json', 'w') as f:
            json.dump(output_obj, f)
            f.close()

        print('EC2 Tags fetched successfully.\nTags are stored in \"ec2_tags.json\".')
        return

    print('No EC2 Instances found in Account.')

def get_instance_tags(filename):
    
    if os.stat(filename).st_size:   # check for empty file 
        with open(filename, 'r') as lines:
            with open('ec2_tags.json', 'w') as output:

                output_obj = []
                for instance_id in lines:

                    try:
                        instance_id = instance_id.strip('\n')
                        if instance_id:
                            instance = ec2.Instance(instance_id)
                            instance_obj = {
                                'Instance-id' : instance_id,
                                'Tags': instance.tags
                            }
                            output_obj.append(instance_obj)
                            continue
                        raise Exception('Invalid Instance Id.')
                    except Exception as e:
                        print(f'Unable to fetch tags for instance: \"{instance_id}\".')
                        print(f'ERROR: {str(e)}\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                
                json.dump(output_obj, output)
                output.close()
            
            lines.close()
            print('Tags are stored in \"ec2_tags.json\".')
            return
        
    print('----------  No instance IDs found in given file.')

    return

if __name__ == '__main__':

    args = sys.argv
    if len(args) > 1:
        filename = args[1]    # Give name of file having instance ids as 1st argument
        get_instance_tags(filename)
    else:
        get_all_instances_tags()