// JavaScript Document
//数据
var data = [
	{
		'name'	:	'前端',
		'list'	:	[
			{
				'title'	:	'前端工程师',
				'company'	:	'北京魔方国际旅行社有限公司',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'北京海淀',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'网站前端页面设计',
				'company'	:	'北京中联讯通网络科技有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'5人',
				'workingLocation'	:	'北京月坛',
				'workExperience'	:	'不限',
				'education'	:	'大专',
				'wage'	:	'7000',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'高级web前端工程师',
				'company'	:	'星职场教育培训公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'12人',
				'workingLocation'	:	'军博',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'HTML5前端工程师',
				'company'	:	'北京育智兴邦教育科技有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'朝阳',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'前端工程师',
				'company'	:	'北京恩跃时代教育科技有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'北京',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'网站前端设计',
				'company'	:	'北京创美时代办公家具有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'北京海淀',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'诚招web前端开发工程师',
				'company'	:	'北京中新美迪文化发展中心 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'东城',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'web前端DIV+CSS',
				'company'	:	'北京华夏安业科技有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'西城',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'前端设计',
				'company'	:	'北京鲁艺轩网络科技有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'3人',
				'workingLocation'	:	'通州',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'招聘 前端页面工作者',
				'company'	:	'千言万语（北京）教育科技有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'北京',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'页面前端工程师',
				'company'	:	'北京奇点时空投资管理有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'4人',
				'workingLocation'	:	'北京海淀',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'高级web前端工程师',
				'company'	:	'星职场教育培训公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'12人',
				'workingLocation'	:	'军博',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'HTML5前端工程师',
				'company'	:	'北京育智兴邦教育科技有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'朝阳',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'前端工程师',
				'company'	:	'北京恩跃时代教育科技有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'北京',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'网站前端设计',
				'company'	:	'北京创美时代办公家具有限公司 ',
				'position'	:	'前端页面',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'北京海淀',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			}
		]
	},
	
	{
		'name'	:	'后端',
		'list'	:	[
			{
				'title'	:	'PHP工程师',
				'company'	:	'北京创美时代办公家具有限公司 ',
				'position'	:	'PHP后台',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'北京海淀',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'诚招java开发工程师',
				'company'	:	'北京中新美迪文化发展中心 ',
				'position'	:	'java开发',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'东城',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'java工程师',
				'company'	:	'北京华夏安业科技有限公司 ',
				'position'	:	'java后台',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'西城',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'.net工程师',
				'company'	:	'北京鲁艺轩网络科技有限公司 ',
				'position'	:	'.net程序员',
				'recruitingNumbers'	:	'3人',
				'workingLocation'	:	'通州',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'招聘php程序员',
				'company'	:	'千言万语（北京）教育科技有限公司 ',
				'position'	:	'php程序员',
				'recruitingNumbers'	:	'2人',
				'workingLocation'	:	'北京',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			},
			{
				'title'	:	'PHP高级工程师',
				'company'	:	'北京奇点时空投资管理有限公司 ',
				'position'	:	'PHP高级工程师',
				'recruitingNumbers'	:	'4人',
				'workingLocation'	:	'北京海淀',
				'workExperience'	:	'不限',
				'education'	:	'不限',
				'wage'	:	'面议',
				'addDate'	:	'2013-12-14'
			}
		]
	}
];