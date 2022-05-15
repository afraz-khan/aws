### Bucket Policy for SSE-S3 based Encryption
This policy denies uploads of any object not having SSE-S3 based encryption applied to it.


```
{
  "Id": "Policy1652623293843",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1652623221780",
      "Action": [
        "s3:PutObject"
      ],
      "Effect": "Deny",
      "Resource": "{S3 Bucket URI}/*",
      "Condition": {
        "StringNotEquals": {
          "s3:x-amz-server-side-encryption": "AES256"
        }
      },
      "Principal": "*"
    },
    {
      "Sid": "Stmt1652623272803",
      "Action": [
        "s3:PutObject"
      ],
      "Effect": "Deny",
      "Resource": "{S3 Bucket URI}/*",
      "Condition": {
        "Null": {
          "s3:x-amz-server-side-encryption": "true"
        }
      },
      "Principal": "*"
    }
  ]
}
```

[Policy Generator URL](https://awspolicygen.s3.amazonaws.com/policygen.html)