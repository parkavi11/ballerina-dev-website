var docData = {"packages":[{"isSingleFile":false,"description":"## Package overview\n\nThis package provides functions to retrieve information about the operating system and the current users of the operating system. The `os:exec` method creates the `os:Process` object, which can control and obtain information about a Ballerina process.\n\nFor information on the operations, which you can perform with the os package, see the below **Functions**.\n","modules":[{"id":"os","summary":"","description":"","orgName":"ballerina","version":"0.8.0-alpha3","records":[],"classes":[{"fields":[],"methods":[{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"Error","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Returns the exit code for the process or else an `Error` if a failure occurs\n","isDeprecated":false}],"name":"waitForExit","description":"Waits for the process to finish its work and exit.\n```ballerina\n    # int|error exitCode \u003d process.waitForExit();\n    # ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"Error","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Returns the exit code of the process or else an `Error` if the process hasn\u0027t exited yet\n","isDeprecated":false}],"name":"exitCode","description":"Returns the exit code of the process when it has finished the execution.\nError if the process has not exited yet.\n```ballerina\n    # int|error exitCode \u003d process.exitCode();\n    # ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[],"name":"destroy","description":"Destroys the process.\n```ballerina\n    # process.destroy();\n    # ```\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"io","version":"0.6.0-alpha3","name":"WritableByteChannel","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"The `io:WritableByteChannel`, which represents the process\u0027s \u0027standard input\u0027\n","isDeprecated":false}],"name":"stdin","description":"Provides a channel (to write into), which is made available as the \u0027standard input\u0027 for the process.\n```ballerina\n    # io:WritableByteChannel output \u003d process.stdin();\n    # ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"io","version":"0.6.0-alpha3","name":"ReadableByteChannel","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"The `io:ReadableByteChannel`, which represents the process\u0027s \u0027standard output\u0027\n","isDeprecated":false}],"name":"stdout","description":"Provides a channel (to read from), which is made available as the \u0027standard output\u0027 of the process.\n```ballerina\n    # io:ReadableByteChannel input \u003d process.stdout();\n    # ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"io","version":"0.6.0-alpha3","name":"ReadableByteChannel","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"The `io:ReadableByteChannel`, which represents the process\u0027s \u0027standard error\u0027\n","isDeprecated":false}],"name":"stderr","description":"Provides a channel (to read from), which is made available as the \u0027standard error\u0027 of the process.\n```ballerina\n    # io:ReadableByteChannel input \u003d process.stderr();\n    # ```\n\n","isDeprecated":false},{"isIsolated":false,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"Process","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"process","description":"The process to pipe the data to\n","isDeprecated":false}],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"Process","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"The process that is passed to be used to help the chain pipe operations\n","isDeprecated":false}],"name":"pipe","description":"Pipes the standard output of the current process to the standard input of the given process.\n```ballerina\n    # var x3out \u003d x1.pipe(x2).pipe(x3).stdout();\n    # ```\n\n","isDeprecated":false}],"otherMethods":[{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"Error","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Returns the exit code for the process or else an `Error` if a failure occurs\n","isDeprecated":false}],"name":"waitForExit","description":"Waits for the process to finish its work and exit.\n```ballerina\n    # int|error exitCode \u003d process.waitForExit();\n    # ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"Error","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Returns the exit code of the process or else an `Error` if the process hasn\u0027t exited yet\n","isDeprecated":false}],"name":"exitCode","description":"Returns the exit code of the process when it has finished the execution.\nError if the process has not exited yet.\n```ballerina\n    # int|error exitCode \u003d process.exitCode();\n    # ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[],"name":"destroy","description":"Destroys the process.\n```ballerina\n    # process.destroy();\n    # ```\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"io","version":"0.6.0-alpha3","name":"WritableByteChannel","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"The `io:WritableByteChannel`, which represents the process\u0027s \u0027standard input\u0027\n","isDeprecated":false}],"name":"stdin","description":"Provides a channel (to write into), which is made available as the \u0027standard input\u0027 for the process.\n```ballerina\n    # io:WritableByteChannel output \u003d process.stdin();\n    # ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"io","version":"0.6.0-alpha3","name":"ReadableByteChannel","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"The `io:ReadableByteChannel`, which represents the process\u0027s \u0027standard output\u0027\n","isDeprecated":false}],"name":"stdout","description":"Provides a channel (to read from), which is made available as the \u0027standard output\u0027 of the process.\n```ballerina\n    # io:ReadableByteChannel input \u003d process.stdout();\n    # ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"io","version":"0.6.0-alpha3","name":"ReadableByteChannel","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"The `io:ReadableByteChannel`, which represents the process\u0027s \u0027standard error\u0027\n","isDeprecated":false}],"name":"stderr","description":"Provides a channel (to read from), which is made available as the \u0027standard error\u0027 of the process.\n```ballerina\n    # io:ReadableByteChannel input \u003d process.stderr();\n    # ```\n\n","isDeprecated":false},{"isIsolated":false,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"Process","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"process","description":"The process to pipe the data to\n","isDeprecated":false}],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"Process","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"The process that is passed to be used to help the chain pipe operations\n","isDeprecated":false}],"name":"pipe","description":"Pipes the standard output of the current process to the standard input of the given process.\n```ballerina\n    # var x3out \u003d x1.pipe(x2).pipe(x3).stdout();\n    # ```\n\n","isDeprecated":false}],"isReadOnly":false,"isIsolated":false,"name":"Process","description":"This object contains information on a process being created from Ballerina.\nThis is returned from the `exec` function in the `os` module.\n","isDeprecated":false}],"abstractObjects":[],"clients":[],"listeners":[],"functions":[{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"command","description":"The name of the command to be executed\n","isDeprecated":false},{"defaultValue":"{}","type":{"name":"map","category":"map","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0,"constraint":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"env","description":"Environment variables to be set to the process\n","isDeprecated":false},{"defaultValue":"()","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"dir","description":"The current working directory to be set to the process\n","isDeprecated":false},{"defaultValue":"","type":{"name":"args","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":true,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0,"elementType":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"args","description":"Command arguments to be passed in\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"Process","category":"classes","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"Error","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"A `os:Process` object if successful or else a `os:Error` if a failure occurs\n","isDeprecated":false}],"name":"exec","description":"Executes an operating system command as a subprocess of the current process.\n```ballerina\n# os:Process|os:Error proc \u003d os:exec(\"ls\", {}, \"/\", \"-la\")\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"name","description":"Name of the environment variable\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Environment variable value if it exists or else an empty string\n","isDeprecated":false}],"name":"getEnv","description":"Returns the environment variable value associated with the provided name.\n```ballerina\n# string port \u003d os:getEnv(\"HTTP_PORT\");\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[],"returnParameters":[{"type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Current user\u0027s home directory if it can be determined or else an empty string\n","isDeprecated":false}],"name":"getUserHome","description":"Returns the current user\u0027s home directory path.\n```ballerina\n# string userHome \u003d os:getUserHome();\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[],"returnParameters":[{"type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Current user\u0027s name if it can be determined or else an empty string\n","isDeprecated":false}],"name":"getUsername","description":"Returns the current user\u0027s name.\n```ballerina\n# string username \u003d os:getUsername();\n# ```\n\n","isDeprecated":false}],"constants":[],"annotations":[],"errors":[{"detailType":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"InvalidOperationError","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"PermissionError","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"FileSystemError","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"FileNotFoundError","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"os","version":"0.8.0-alpha3","name":"ProcessExecError","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"Error","description":"The union of all the OS related errors.\n","isDeprecated":false},{"name":"FileNotFoundError","description":"Represents a `FileNotFoundError` with the message and the cause.\n","isDeprecated":false},{"name":"FileSystemError","description":"Represents a `FileSystemError` with the message and the cause.\n","isDeprecated":false},{"name":"InvalidOperationError","description":"Represents an `InvalidOperationError` with the message and the cause.\n","isDeprecated":false},{"name":"PermissionError","description":"Represents a `PermissionError` with the message and the cause.\n","isDeprecated":false},{"name":"ProcessExecError","description":"Represents an `ProcessExecError` with the message and the cause.\n","isDeprecated":false}],"types":[],"enums":[]}],"name":"os","orgName":"ballerina","version":"0.8.0-alpha3","summary":"This package provides functions to retrieve information about the operating system and the current users of the operating system. The \"os:exec\" method creates the \"os:Process\" object, which can control and obtain information about a Ballerina process.\n"}]};