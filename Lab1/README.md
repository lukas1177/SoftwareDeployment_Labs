# Lab1

This ReadMe describes the usage of the Azure ARM template for deploying resources in Azure, including a storage account and a web application that can be used with node js.

## Parameter Description

| Parameter                | Description                                      |
|--------------------------|--------------------------------------------------|
| `storageAccountName`     | The name of the storage account.                 |
| `webAppName`             | The name of the web application.                 |
| `location`               | The geographic location for the resources (e.g., "West Europe"). |
| `appServicePlanName`     | The name of the app service plan.                |
| `storageSkuName`         | The SKU of the storage account (e.g., "Standard_LRS"). |
| `storageKind`            | The kind of the storage account (e.g., "StorageV2"). |
| `webAppSkuName`         | The SKU of the web application (e.g., "F1").     |

## Deploying the ARM Template

The azuredeploy.json file can be used as it is to create a storage account and the web application. To use it with different parameters the parameter file can be updated to change the values of the parameters described in the chapter above.  

To use the ARM template and parameter file, execute the following Azure CLI command:

```bash

az deployment group create --resource-group <RESOURCE_GROUP_NAME> --template-file azuredeploy.json --parameters @azuredeploy.parameters.json
