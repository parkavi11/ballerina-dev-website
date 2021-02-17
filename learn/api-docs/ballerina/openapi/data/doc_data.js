var docData = {"packages":[{"isSingleFile":false,"description":"## Module overview\n\nThe OpenAPI tools provide the following capabilities.\n \n 1. Generate the Ballerina service or client code for a given OpenAPI definition. \n 2. Export the OpenAPI definition of a Ballerina service.\n 3. Validate the service implementation of a given OpenAPI contract.\n    \nThe `openapi` command in Ballerina is used for OpenAPI to Ballerina and Ballerina to OpenAPI code generations. \nCode generation from OpenAPI to Ballerina can produce `ballerina service stubs` and `ballerina client stubs`.\nThe OpenAPI compiler plugin will allow you to validate a service implementation against an OpenAPI contract during\n the compile time.\nThis plugin ensures that the implementation of a service does not deviate from its OpenAPI contract.   \n\n### OpenAPI to Ballerina\n#### Generate Service and Client Stub from an OpenAPI Contract\n\n```bash\nbal openapi -i \u003copenapi-contract-path\u003e \n               [--service-name: generated files name]\n               [--tags: tags list]\n               [--operations: operationsID list]\n               [--mode service|client ]\n               [(-o|--output): output file path]\n```\nGenerates both the Ballerina service and Ballerina client stub for a given OpenAPI file.\n\nThis `-i \u003copenapi-contract-path\u003e` parameter of the command is mandatory. It will get the path to the\n OpenAPI contract file (i.e., `my-api.yaml` or `my-api.json`) as an input.\n\nThe `--service-name`  is an optional parameter, which allows you to change the generated service name.\n\nYou can give the specific tags and operations that you need to document as services without documenting all the operations using these optional `--tags` and `--operations` commands.\n\nThe `(-o|--output)` is an optional parameter. You can use this to give the output path of the generated files.\nIf not, it will take the execution path as the output path.\n\n##### Modes\nIf you want to generate a service only, you can set the mode as `service` in the OpenAPI tool.\n\n```bash\nbal openapi -i \u003copenapi-contract-path\u003e --mode service [(-o|--output) output file path]\n```\n\nIf you want to generate a client only, you can set the mode as  `client` in the OpenAPI tool. \nThis client can be used in client applications to call the service defined in the OpenAPI file.\n\n```bash\nbal openapi -i \u003copenapi-contract-path\u003e --mode client\n               [(-o|--output) output file path]\n```\n\n### Ballerina to OpenAPI\n#### Service to OpenAPI Export\n```bash\nbal openapi -i \u003cballerina-file-path\u003e \n               [(-o|--output) output openapi file path]\n```\nExport the Ballerina service to an  OpenAPI Specification 3.0 definition. For the export to work properly, \nthe input Ballerina service should be defined using the basic service and resource-level HTTP annotations.\nIf you need to document an OpenAPI contract for only one given service, then use this command.\n```bash\n    bal openapi -i \u003cballerina-file-path\u003e (-s | --service) \u003cservice-name\u003e\n```\n\n### Samples for OpenAPI Commands\n#### Generate Service and Client Stub from OpenAPI\n```bash\n    bal openapi -i hello.yaml\n```\n\nThis will generate a Ballerina service and client stub for the `hello.yaml` OpenAPI contract named `hello-service\n` and client named `hello-client`. The above command can be run from within anywhere on the execution path. \nIt is not mandatory to run it from inside the Ballerina project.\n\nOutput:\n```bash\nThe service generation process is complete. The following files were created.\n-- hello-service.bal\n-- hello-client.bal\n-- schema.bal\n```\n#### Generate an OpenAPI Contract from a Service\n\n ```bash\n    bal openapi -i modules/helloworld/helloService.bal\n  ```\nThis will generate the OpenAPI contracts for the Ballerina services, which are in the `hello.bal` Ballerina file.\n ```bash \n    bal openapi -i modules/helloworld/helloService.bal (-s | --service) helloworld\n  ```\nThis command will generate the `helloworld-openapi.yaml` file that is related to the `helloworld` service inside the\n `helloService.bal` file.\n\n## OpenAPI Validator Compiler Plugin\n\nThe OpenAPI Validator Compiler plugin validates a service against a given OpenAPI contract. \nThe Compiler Plugin is activated if a service has the `openapi:ServiceInfo` annotation. This plugin compares \nthe service and the OpenAPI Contract and validates both against a pre-defined set of validation rules. \nIf any of the rules fail, the plugin will give the result as one or more compilation errors.\n\n### Annotation for Validator Plugin \nThe `@openapi:ServiceInfo` annotation is used to bind the service with an OpenAPI contract. You need to add \nthis annotation to the service file with the required values for enabling the validations.  \nThe following is an example of the annotation usage.\n```ballerina\n@openapi:ServiceInfo{\n    contract: “/path/to/openapi.json|yaml”,\n    [ tag : “store” ],\n    [ operations: [“op1”, “op2”] ] \n    [ failOnErrors]: true/false → default : true\n    [ excludeTags ]: [“pets”, “user”]\n    [ excludeOperations: [“op1”, “op2”] ]\n   }\nservice greet on new http:Listener(9090) {\n    ...\n}\n```\n#### Annotation Support for the Following Attributes:\n- **Contract** (Required) : **string**  :\nHere, you can provide a path to the OpenAPI contract as a string and the OpenAPI file can either be `.yaml` or `.json`\nThis is a required attribute.\n\n- **Tag** (Optional) : **string[]?**     :\nThe compiler will only validate resources against operations, which are tagged with a tag specified in the list.\nIf not specified, the compiler will validate resources against all the operations defined in the OpenAPI contract. \n\n- **Operations** (Optional): **string[]?**  :\nShould contain a list of operation names that need to be validated against the resources in the service.\nIf not specified, the compiler will validate resources against all the operations defined in the OpenAPI contract. If both tags and operations are defined, it will validate against the union set of the resources.\n\n- **ExcludeTags** (Optional) : **string[]?**    :\nThis feature is for users to store the tag. It does not need to be validated.\nAt the same time, the `excludeTag` and `Tag` cannot store and the plugin will generate warning messages regarding\n it.\n\n- **ExcludeOperations** (Optional) : **string[]?**  :\nThis feature is for users to store the operations that do not need to be validated.\nAt the same time, the `excludeOperations` and  `Operations` can not store and they will generate warning messages.\nThe `Tag` feature can store with `excludeOperations`. Then, all the tag operations will be validated except the `exclude`\n operations.\n \n- **FailOnErrors** (Optional) : **boolean value**   :\nIf you need to turn off the validation, add this to the annotation with the value as `false`.\n\n","modules":[{"id":"openapi","summary":"","description":"","orgName":"ballerina","version":"2.0.6","records":[{"fields":[{"defaultValue":"\"\"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"contract","description":"OpenApi Contract link\n","isDeprecated":false},{"defaultValue":"[]","type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"tags","description":"OpenApi Tags\n","isDeprecated":false},{"defaultValue":"[]","type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"operations","description":"OpenApi Operations\n","isDeprecated":false},{"defaultValue":"[]","type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"excludeTags","description":"Openapi Validator Off for these tags\n","isDeprecated":false},{"defaultValue":"[]","type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"excludeOperations","description":"Openapi Validator Off for these operations\n","isDeprecated":false},{"defaultValue":"true","type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"failOnErrors","description":"OpenApi Validator Enable\n","isDeprecated":false}],"isClosed":true,"name":"ServiceInformation","description":"Service validation codee\n","isDeprecated":false}],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[],"constants":[],"annotations":[{"type":{"orgName":"ballerina","moduleName":"openapi","version":"2.0.6","name":"ServiceInformation","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"attachmentPoints":"service","name":"ServiceInfo","description":"Annotation for additional OpenAPI information of a Ballerina service.\n","isDeprecated":false}],"errors":[],"types":[],"enums":[]}],"name":"openapi","orgName":"ballerina","version":"2.0.6","summary":"The OpenAPI tools provide the following capabilities.\n"}]};