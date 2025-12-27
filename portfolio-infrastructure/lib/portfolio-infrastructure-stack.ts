import * as cdk from 'aws-cdk-lib';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Amplify Application
    const amplifyApp = new amplify.App(this, "PortfolioApplication", {  
      appName: "Portfolio",
      
      // Connect to my github repo
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'akadarkoh',
        repository: 'portfolio',
        oauthToken: cdk.SecretValue.secretsManager('github-token')
      }),
      
      // Build Specification - FIXED syntax
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "Starting build..."',
                'npm install'
              ]
            },
            build: {
              commands: [
                'echo "Building Next.js app..."',
                'npm run build'
              ]
            }
          },
          artifacts: {
            baseDirectory: '.next',  
            files: ['**/*']
          },
          cache: {
            paths: [
              'node_modules/**/*',  
              '.next/cache/**/*'
            ]
          }
        }
      }) //build
    });  

    // Add main branch
    const mainBranch = amplifyApp.addBranch('main', {
      stage: 'PRODUCTION',  
      autoBuild: true
    });
  }
}