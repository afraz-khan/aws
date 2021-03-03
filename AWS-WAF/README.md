# AWS WAF

### AWS WAF Rules Deployment
  In AWS WAF, a WebACL is a sole entity to validate web app requests against rules. Rules are attached to a single WebACL. They can be either managed (AWS & partners made) or customized.  
You can deploy WAF rules either through [AWS Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-fms.html) for big organization/multiple-accounts like environments and also manually in a single account too.
  > All CloudFormation templates given are using the latest WAF API, WAF also has an [old (classic)](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) version still running.
   
 ### Deploy Managed WAF Rules
 To deploy AWS Managed WAF rules, a basic template named **Managed-WAF-Rules.template** is given above. It has a single WebACL having a couple of managed rules and structures to start with. see more details about managed rules [here](https://docs.aws.amazon.com/waf/latest/developerguide/waf-managed-rule-groups.html).
 
 ### Deploy Custom WAF Rules
 Custom WAF rules can be created according to the need of use-case. You can create web request rule checks using parameters available in AWS WAF Console or through CloudFormation.  
 A basic template named **Custom-WAF-Rules.template** is given above for custom rules within a single WebACL. It has almost all types of [rule statements](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statementone.html) covered for a baseline.