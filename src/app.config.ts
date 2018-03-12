import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

	// App Settings
	config = {
		authSettings: {
			anonymousLogin: false,
			socialLogin: true,
			gitHubLogin: false,
			googleLogin: true,
			facebookLogin: true,
			twitterLogin: true
		},
	}
	

	constructor() {

	}
}
