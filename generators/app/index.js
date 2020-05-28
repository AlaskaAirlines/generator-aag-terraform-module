const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay('Welcome to the aag-terraform-module generator v0.6.1!'));

    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter name for the new terraform module : ',
        store: true,
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter description for the new terraform module : ',
        store: true,
      },
      {
        type: 'input',
        name: 'author',
        message: 'Enter author name : ',
        default:
          'Shadow Quests (E-Commerce Platform Team) <shadowquests@alaskaair.com>',
        store: true,
      },
      {
        type: 'list',
        name: 'tfVersion',
        message: 'Choose terraform version',
        store: true,
        choices: [
          {
            name: '0.12',
            value: '12',
          },
          {
            name: '0.11',
            value: '11',
          },
        ],
      },
      {
        type: 'list',
        name: 'testFramework',
        message: 'Choose test framework',
        store: true,
        choices: [
          {
            name: 'Terratest',
            value: '1',
          },
          {
            name: 'kitchen-terraform',
            value: '2',
          },
        ],
      },
    ]);
  }

  writing() {
    this.destinationRoot(this.answers.name);
    
    this.fs.copyTpl(
      `${this.templatePath()}/.!(gitignorefile|gitattributesfile|pre-commit-config|terraform-version)*`,
      this.destinationRoot(),
      {},
    );

    this.fs.copyTpl(
      this.templatePath('.gitignorefile'),
      this.destinationPath('.gitignore'),
      {
        testFramework: this.answers.testFramework,
      },
    );

    this.fs.copyTpl(
      this.templatePath('.gitattributesfile'),
      this.destinationPath('.gitattributes'),
      {
        testFramework: this.answers.testFramework,
      },
    );

    this.fs.copyTpl(
      this.templatePath('.pre-commit-config.yaml'),
      this.destinationPath('.pre-commit-config.yaml'),
      {
        testFramework: this.answers.testFramework,
      },
    );

    this.fs.copyTpl(
      this.templatePath('.terraform-version'),
      this.destinationPath('.terraform-version'),
      {
        tfVersion: this.answers.tfVersion,
      },
    );

    this.fs.copyTpl(
      `${this.templatePath()}/(Brewfile|Makefile)`,
      this.destinationRoot(),
      {
        testFramework: this.answers.testFramework,
      },
    );

    this.fs.copyTpl(
      `${this.templatePath()}/docs/*.md`,
      `${this.destinationPath()}/docs`
    );

    this.fs.copyTpl(
      `${this.templatePath()}/**/*.tf`,
      this.destinationRoot(),
      {},
    );

    if (this.answers.testFramework === '1') {
      this.fs.copyTpl(
        `${this.templatePath()}/test/terratest/*.go`,
        `${this.destinationRoot()}/test`,
        {},
      );
    } else {
      this.fs.copyTpl(
        `${this.templatePath()}/test/kitchen-terraform/.*`,
        this.destinationRoot(),
        {},
      );
      this.fs.copyTpl(
        `${this.templatePath()}/test/kitchen-terraform/**/*`,
        this.destinationRoot(),
        {},
      );
    }

    this.fs.copyTpl(
      this.templatePath('_.releaserc'),
      this.destinationPath('.releaserc'), {
        name: this.answers.name
      }
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.answers.name,
        author: this.answers.author
      }
    );

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      {
        name: this.answers.name,
        description: this.answers.description,
        author: this.answers.author,
        testFramework: this.answers.testFramework,
      },
    );
  }
};
