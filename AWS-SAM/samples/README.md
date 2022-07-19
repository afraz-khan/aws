# SAM Samples
SAM templates to deploy multiple simple Serverless solutions.

- There is code in the `src` directory for each individual template.
- Directory `gen` is used for the final output template file that `sam package` or `aws cloudformation package` command generates.
- Have a look at `commands.sh` file. It has commands to package & deploy SAM templates.
- Make sure you create an S3 bucket before deploying.
