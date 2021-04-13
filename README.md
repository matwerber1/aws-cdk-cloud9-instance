# CDK Demo of Cloud9

This project provides a basic demo of deploying a Cloud9 instance with the AWS CDK. 

## Prerequisities

1. Install and configure the [AWS CLI](https://aws.amazon.com/cli/)

1. Install the [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_install)

1. An existing AWS account with a pre-existing VPC and at least one public subnet. 

### Deployment

1. `git clone` this project and cd to the root directory

1. `npm install` to install dependencies. 

1. Within `bin/cdk-cloud9.ts`, configure your AWS account ID and region:

    ```js
    env: {
        account: '999999999999',
        region: 'us-west-2'
    }
    ```

1. Within `lib/cdk-cloud9-stack.ts`, enter the VPC ID of your existing VPC in which your Cloud9 Instance will be launched: 

    ```js
    const myExistingVPCId = 'vpc-0a2cad50c98aed83f';
    ```

1. From the project root, run `cdk deploy`

### Notes

Refer to the commits in this project to see all of the individual steps. 

This project was bootstrapped by running `cdk init app --language=typescript`. This creates a lot of boilerplate project files, but really the only two that matter (for this demo) and that we need to change are `bin/cdk-cloud9.ts` and `lib/cdk-cloud9-stack.ts`.

When you run `cdk deploy`, your code in `lib/cdk-cloud9-stack.ts` will be synthesized to a standard CloudFormation JSON template and deployed as a new CloudFormation stack in your account/region. Subsequent `cdk deploy` commands will update the existing stack. 