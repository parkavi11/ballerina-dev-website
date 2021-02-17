var docData = {"packages":[{"isSingleFile":false,"description":"## Package Overview\n\nThis package provides a function to transform the XML content to another XML/HTML/plain text using XSL transformations.\n\nFor information on the operations, which you can perform with this module, see the below **Functions**. For examples on the usage of the operations, see the [XSLT Transformation Example](https://ballerina.io/learn/by-example/xslt-transformation.html).","modules":[{"id":"xslt","summary":"","description":"","orgName":"ballerina","version":"1.1.0-alpha3","records":[],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"xml","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"input","description":"An XML object, which needs to be transformed\n","isDeprecated":false},{"defaultValue":"","type":{"name":"xml","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"xsl","description":"The XSL style sheet represented in an XML object\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"xml","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"The transformed result represented in an XML object or else an `error` if the given `XML` object\n           can\u0027t be transformed\n","isDeprecated":false}],"name":"transform","description":"Transforms the single-rooted XML content to another XML/HTML/plain text using XSL transformations.\n```ballerina\n# xml|error target \u003d xslt:transform(sourceXml, xsl);\n# ```\n\n","isDeprecated":false}],"constants":[],"annotations":[],"errors":[{"name":"TransformError","description":"Represents a `TransformError` with the message and the cause.\n","isDeprecated":false}],"types":[],"enums":[]}],"name":"xslt","orgName":"ballerina","version":"1.1.0-alpha3","summary":"This package provides a function to transform the XML content to another XML/HTML/plain text using XSL transformations.\n"}]};