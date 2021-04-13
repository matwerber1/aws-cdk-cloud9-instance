import * as cdk from '@aws-cdk/core';
import * as cloud9 from '@aws-cdk/aws-cloud9';
import * as ec2 from '@aws-cdk/aws-ec2';


export class CdkCloud9Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const myExistingVPCId = 'vpc-0a2cad50c98aed83f';

    // If you want to reference an AWS resource that was created outside of a stack, 
    // you can typically import it using a method like below. Some CDK object properties
    // accept simple strings containing a resource ID, while others require an actual
    // CDK object representation: 
    const myExistingVPC = ec2.Vpc.fromLookup(this, 'MyExistingVPC', {
      vpcId: myExistingVPCId,
    })

    const myCloud9 = new cloud9.Ec2Environment(this, 'myCloud9', {
      ec2EnvironmentName: 'demo-cdk-environment',
      description: 'Demo environment created by AWS CDK',
      instanceType: new ec2.InstanceType('t2.micro'),
      vpc: myExistingVPC,
      
      // The selectSubnets() method has several different ways to select subnets; in my case, 
      // I'm simply saying that any of my public subnets are valid. But, you could also explicitly
      // define subnet IDs. There are also ways to use Cloud9 in private subnets, for simplicity not
      // going that route in this demo. 
      subnetSelection: myExistingVPC.selectSubnets({ 
        subnetType: ec2.SubnetType.PUBLIC
      }),

      // While I'm not using it here, the property below would allow me to automatically bootstrap
      // the Cloud9 instance with one or more AWS CodeCommit repositories already git-cloned: 
      // clonedRepositories: []
    })


  }
}
