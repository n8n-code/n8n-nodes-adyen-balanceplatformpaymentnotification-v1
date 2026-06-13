import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenBalanceplatformpaymentnotificationV1Api implements ICredentialType {
        name = 'N8nDevAdyenBalanceplatformpaymentnotificationV1Api';

        displayName = 'Adyen Balanceplatformpaymentnotification V1 API';

        icon: Icon = { light: 'file:../nodes/AdyenBalanceplatformpaymentnotificationV1/adyen-balanceplatformpaymentnotification-v1.svg', dark: 'file:../nodes/AdyenBalanceplatformpaymentnotificationV1/adyen-balanceplatformpaymentnotification-v1.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://balanceplatform-api-test.adyen.com/btl/v1',
                        required: true,
                        placeholder: 'https://balanceplatform-api-test.adyen.com/btl/v1',
                        description: 'The base URL of your Adyen Balanceplatformpaymentnotification V1 API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
