
# Unique Constraint on Username Aliases
AWS Cognito provides multiple options for authentication ranging from ***email***, ***phone***, ***prefered_username*** and their combinations. But unique constraint is applied to these auth attributes according to the policy we choose while setting up the userpools.

In cognito there are 2 main policy options for usernames as shown in below figures,
 1. ![username](https://github.com/afraz-khan/aws/blob/main/AWS-Cognito/Username%20Aliases/username.png?raw=true)

When you choose this policy for setting up auth attributes. Cognito requires your application to assign a ***username*** for sure to each user. Cognito will apply ***unique constraint*** on username and also on all the sub-fields you choose.
	> visit [here](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html) for more details.
 
 1. ![email-phone](https://github.com/afraz-khan/aws/blob/main/AWS-Cognito/Username%20Aliases/email-phone.png?raw=true)
 
 In this policy, ***unique constraint*** works normally for the first 2 sub-options but the last option is a bit tricky, where the user has option to choose from either email and phone for authentication.
 In 3rd sub-option, ***unique constraint*** is applied to a particular email or phone only if that email or phone value is used for signup, otherwise, multiple users can have the same phone or email that was not used for signup. You have to be cautious with this option and handle uniqueness separately in your application if needed.