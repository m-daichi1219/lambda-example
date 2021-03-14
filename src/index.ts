import * as lambda from "aws-lambda";

exports.handler = (
  event: any,
  context: lambda.Context,
  callback: lambda.Callback
): void => {
  console.log("hello world");
};
