### Public S3 Bucket
Below policy will make your bucket data public to anyone.


```
{
  "Id": "Policy1652630765351",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1652630762544",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "{My Bucket URI}/*",
      "Principal": "*"
    }
  ]
}
```