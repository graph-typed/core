import yaml from "yaml";
import { OpenAPIV3 } from "openapi-types";

console.log("Starting graph-typed generation...");

const url =
  "https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/refs/heads/master/openapi/v1.0/openapi.yaml";

// Fetch the raw OpenAPI Spec YAML file from the GitHub URL
console.log("Fetching official OpenAPI spec from Microsoft Graph...");
const response = await fetch(url);

console.log("Parsing YAML file...");
const yamlText = await response.text();

const parsedYaml = yaml.parse(yamlText) as OpenAPIV3.Document;

console.log(Object.keys(parsedYaml.paths).length, "paths found");
console.dir(parsedYaml, { depth: 0 });
