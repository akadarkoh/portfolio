import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'PortfolioInfrastructureQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // Amplify App
    const amplifyApp = new amplify.App(this, 'PortfolioApplication', {
      appName: 'Portfolio',
      // connect to github repo
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'akadarkoh',
        repository: 'portfolio',
        oauthToken: cdk.SecretValue.secretsManager('github-token'),
      }),

      //  Build Specification
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "starting this build"',
                'cd portfolio',
                'npm install'
               ],
            },
            build: {
              commands: [
                'echo "building our next.js app"',
                'npm run build',
                'echo "build is completed"'
              ], 
          },
        },
        artifacts: {
          baseDirectory: 'portfolio/out',
          files: [
            '**/*'
          ],
        },
        cache: {
          paths: [
            'node/modules/**/*',
            '.next/cache/**/*'
          ]
        }
      }
      })
      

      })
    
      const mainBranch = amplifyApp.addBranch('main', {
        autoBuild: true
      })  
        
  }
}
