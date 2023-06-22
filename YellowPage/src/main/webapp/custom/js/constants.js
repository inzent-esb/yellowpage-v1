var constants = {
	 regExpList: {
		id: { maxLength: 70, regExp: '[^A-Za-z0-9_.-]'},
		searchId: { maxLength: 70, regExp: '[^A-Za-z0-9_.#%-]'},
		name: { maxLength: 70, regExp: '' },
		value: { maxLength: 90, regExp: '' },
		desc: { maxLength: 500, regExp: '' },
		num: { maxLength: 30, regExp: '[^0-9]' },
		url: { maxLength: 100, regExp: '' },
		ip: { maxLength: 30, regExp: '[^0-9.]' },
		className: { maxLength: 200, regExp: '[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]' },
		cron: { maxLength: 30, regExp: '[^A-Za-z0-9*,#-? ]'},
		password: { maxLength: 30, regExp: '[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]'},
		pageSize: { maxLength: 4, regExp: '[^0-9]' },
		default: { maxLength: 100, regExp: '' }
	},
	logInTime: 300000,
	//escape: 27, space: 32
	modalCloseKeyCode: [27, 32],
	isUseTheme: true,
	
	grid : {
		// only server type
		pageOptions: {
			notice: {
				limit: 100,
				ascending: false
			},
			default: {
				limit: 100,
				ascending: false			
			}
		},
		maxListCount: {
			103010 : 1000,
		}
	},
	
	detail: {
		105000: {
			selectedInfoTitleKey: ['pk.publishDateTime', 'pk.publishId']
		},
	},
	
	// 서비스 단독 배포
	isPublishService: false,
	
	// 명세서 기능
	isSpecification: true,
};