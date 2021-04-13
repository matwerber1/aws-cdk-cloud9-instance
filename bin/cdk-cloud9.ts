#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCloud9Stack } from '../lib/cdk-cloud9-stack';

const app = new cdk.App();
new CdkCloud9Stack(app, 'CdkCloud9Stack', {
  
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */

  // You don't necessarilly always need to provide account/region. In many cases, this can be
  // inferred by CDK based on the AWS credentials you are using. However, since I am importing a pre-existing
  // VPC in lib/cdk-cloud9-stack.ts, CDK does not know which account/region that VPC belongs to and I need to
  // explicitly define it here:
  env: {
    account: '999999999999',
    region: 'us-west-2'
  }
});
