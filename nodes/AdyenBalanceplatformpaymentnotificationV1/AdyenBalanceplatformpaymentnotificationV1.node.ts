import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AdyenBalanceplatformpaymentnotificationV1 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Adyen Balanceplatformpaymentnotification V1',
		name: 'N8nDevAdyenBalanceplatformpaymentnotificationV1',
		icon: { light: 'file:./adyen-balanceplatformpaymentnotification-v1.svg', dark: 'file:./adyen-balanceplatformpaymentnotification-v1.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Payment webhooks deprecated. Use accounting webhooks instead.',
		defaults: { name: 'Adyen Balanceplatformpaymentnotification V1' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAdyenBalanceplatformpaymentnotificationV1Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
