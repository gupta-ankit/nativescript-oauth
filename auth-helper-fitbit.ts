/// <reference path="references.d.ts" />

import * as tnsOauth from './tns-oauth';
import { AuthHelper } from './auth-helper';
import * as TnsOAuth from './tns-oauth-interfaces';

export class AuthHelperFitbit extends AuthHelper implements TnsOAuth.ITnsAuthHelper {

  constructor(clientId: string, clientSecret: string, redirectUri: string, scope: Array<string>) {
    super();
    var scopeStr = scope.join(' ');
    this.credentials = {
      authority: 'https://api.fitbit.com',
      tokenEndpointBase: 'https://api.fitbit.com',
      authorizeEndpoint: '/oauth2/authorize',
      tokenEndpoint: '/oauth2/token',
      clientId: clientId,
      clientSecret: clientSecret,
      redirectUri: redirectUri,
      scope: scopeStr
    };
  }

  public logout(successPage?: string): Promise<void> {
    let cookieDomains = [".fitbit.com"]; //need to double check this
    return this._logout(successPage, cookieDomains);
  }
}
