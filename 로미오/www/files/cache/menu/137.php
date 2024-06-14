<?php if(!defined("__XE__")) exit(); $menu = new stdClass();$lang_type = Context::getLangType(); $is_logged = Context::get('is_logged'); $logged_info = Context::get('logged_info'); $site_srl = 0;$site_admin = false;if($site_srl) { $oModuleModel = getModel('module');$site_module_info = $oModuleModel->getSiteInfo($site_srl); if($site_module_info) Context::set('site_module_info',$site_module_info);else $site_module_info = Context::get('site_module_info');$grant = $oModuleModel->getGrant($site_module_info, $logged_info); if($grant->manager ==1) $site_admin = true;}if($is_logged) {if($logged_info->is_admin=="Y") $is_admin = true; else $is_admin = false; $group_srls = array_keys($logged_info->group_list); } else { $is_admin = false; $group_srls = array(); }; $_menu_names[139] = array("en"=>'치과소개',"ko"=>'치과소개',"jp"=>'치과소개',"zh-CN"=>'치과소개',"zh-TW"=>'치과소개',"fr"=>'치과소개',"de"=>'치과소개',"ru"=>'치과소개',"es"=>'치과소개',"tr"=>'치과소개',"vi"=>'치과소개',"mn"=>'치과소개',); $_menu_names[140] = array("en"=>'의료진소개',"ko"=>'의료진소개',"jp"=>'의료진소개',"zh-CN"=>'의료진소개',"zh-TW"=>'의료진소개',"fr"=>'의료진소개',"de"=>'의료진소개',"ru"=>'의료진소개',"es"=>'의료진소개',"tr"=>'의료진소개',"vi"=>'의료진소개',"mn"=>'의료진소개',); $_menu_names[141] = array("en"=>'의료진별 진료시간',"ko"=>'의료진별 진료시간',"jp"=>'의료진별 진료시간',"zh-CN"=>'의료진별 진료시간',"zh-TW"=>'의료진별 진료시간',"fr"=>'의료진별 진료시간',"de"=>'의료진별 진료시간',"ru"=>'의료진별 진료시간',"es"=>'의료진별 진료시간',"tr"=>'의료진별 진료시간',"vi"=>'의료진별 진료시간',"mn"=>'의료진별 진료시간',); $_menu_names[142] = array("en"=>'진료시간 &amp; 오시는길',"ko"=>'진료시간 &amp; 오시는길',"jp"=>'진료시간 &amp; 오시는길',"zh-CN"=>'진료시간 &amp; 오시는길',"zh-TW"=>'진료시간 &amp; 오시는길',"fr"=>'진료시간 &amp; 오시는길',"de"=>'진료시간 &amp; 오시는길',"ru"=>'진료시간 &amp; 오시는길',"es"=>'진료시간 &amp; 오시는길',"tr"=>'진료시간 &amp; 오시는길',"vi"=>'진료시간 &amp; 오시는길',"mn"=>'진료시간 &amp; 오시는길',); $_menu_names[144] = array("en"=>'20년간 한자리, 교정전문치과',"ko"=>'20년간 한자리, 교정전문치과',"jp"=>'20년간 한자리, 교정전문치과',"zh-CN"=>'20년간 한자리, 교정전문치과',"zh-TW"=>'20년간 한자리, 교정전문치과',"fr"=>'20년간 한자리, 교정전문치과',"de"=>'20년간 한자리, 교정전문치과',"ru"=>'20년간 한자리, 교정전문치과',"es"=>'20년간 한자리, 교정전문치과',"tr"=>'20년간 한자리, 교정전문치과',"vi"=>'20년간 한자리, 교정전문치과',"mn"=>'20년간 한자리, 교정전문치과',); $_menu_names[189] = array("en"=>'교정학박사&amp;교정전문의의 전문성',"ko"=>'교정학박사&amp;교정전문의의 전문성',"jp"=>'교정학박사&amp;교정전문의의 전문성',"zh-CN"=>'교정학박사&amp;교정전문의의 전문성',"zh-TW"=>'교정학박사&amp;교정전문의의 전문성',"fr"=>'교정학박사&amp;교정전문의의 전문성',"de"=>'교정학박사&amp;교정전문의의 전문성',"ru"=>'교정학박사&amp;교정전문의의 전문성',"es"=>'교정학박사&amp;교정전문의의 전문성',"tr"=>'교정학박사&amp;교정전문의의 전문성',"vi"=>'교정학박사&amp;교정전문의의 전문성',"mn"=>'교정학박사&amp;교정전문의의 전문성',); $_menu_names[190] = array("en"=>'20년, 교정치료 노하우',"ko"=>'20년, 교정치료 노하우',"jp"=>'20년, 교정치료 노하우',"zh-CN"=>'20년, 교정치료 노하우',"zh-TW"=>'20년, 교정치료 노하우',"fr"=>'20년, 교정치료 노하우',"de"=>'20년, 교정치료 노하우',"ru"=>'20년, 교정치료 노하우',"es"=>'20년, 교정치료 노하우',"tr"=>'20년, 교정치료 노하우',"vi"=>'20년, 교정치료 노하우',"mn"=>'20년, 교정치료 노하우',); $_menu_names[191] = array("en"=>'바뀌지 않는 평생 교정주치의',"ko"=>'바뀌지 않는 평생 교정주치의',"jp"=>'바뀌지 않는 평생 교정주치의',"zh-CN"=>'바뀌지 않는 평생 교정주치의',"zh-TW"=>'바뀌지 않는 평생 교정주치의',"fr"=>'바뀌지 않는 평생 교정주치의',"de"=>'바뀌지 않는 평생 교정주치의',"ru"=>'바뀌지 않는 평생 교정주치의',"es"=>'바뀌지 않는 평생 교정주치의',"tr"=>'바뀌지 않는 평생 교정주치의',"vi"=>'바뀌지 않는 평생 교정주치의',"mn"=>'바뀌지 않는 평생 교정주치의',); $_menu_names[192] = array("en"=>'소문내고 싶은 교정만족도',"ko"=>'소문내고 싶은 교정만족도',"jp"=>'소문내고 싶은 교정만족도',"zh-CN"=>'소문내고 싶은 교정만족도',"zh-TW"=>'소문내고 싶은 교정만족도',"fr"=>'소문내고 싶은 교정만족도',"de"=>'소문내고 싶은 교정만족도',"ru"=>'소문내고 싶은 교정만족도',"es"=>'소문내고 싶은 교정만족도',"tr"=>'소문내고 싶은 교정만족도',"vi"=>'소문내고 싶은 교정만족도',"mn"=>'소문내고 싶은 교정만족도',); $_menu_names[193] = array("en"=>'후기가 보장하는 치료 퀄리티',"ko"=>'후기가 보장하는 치료 퀄리티',"jp"=>'후기가 보장하는 치료 퀄리티',"zh-CN"=>'후기가 보장하는 치료 퀄리티',"zh-TW"=>'후기가 보장하는 치료 퀄리티',"fr"=>'후기가 보장하는 치료 퀄리티',"de"=>'후기가 보장하는 치료 퀄리티',"ru"=>'후기가 보장하는 치료 퀄리티',"es"=>'후기가 보장하는 치료 퀄리티',"tr"=>'후기가 보장하는 치료 퀄리티',"vi"=>'후기가 보장하는 치료 퀄리티',"mn"=>'후기가 보장하는 치료 퀄리티',); $_menu_names[146] = array("en"=>'교정과전문의의 교정프로그램',"ko"=>'교정과전문의의 교정프로그램',"jp"=>'교정과전문의의 교정프로그램',"zh-CN"=>'교정과전문의의 교정프로그램',"zh-TW"=>'교정과전문의의 교정프로그램',"fr"=>'교정과전문의의 교정프로그램',"de"=>'교정과전문의의 교정프로그램',"ru"=>'교정과전문의의 교정프로그램',"es"=>'교정과전문의의 교정프로그램',"tr"=>'교정과전문의의 교정프로그램',"vi"=>'교정과전문의의 교정프로그램',"mn"=>'교정과전문의의 교정프로그램',); $_menu_names[194] = array("en"=>'단하나의 교정, 맞춤교정프로그램',"ko"=>'단하나의 교정, 맞춤교정프로그램',"jp"=>'단하나의 교정, 맞춤교정프로그램',"zh-CN"=>'단하나의 교정, 맞춤교정프로그램',"zh-TW"=>'단하나의 교정, 맞춤교정프로그램',"fr"=>'단하나의 교정, 맞춤교정프로그램',"de"=>'단하나의 교정, 맞춤교정프로그램',"ru"=>'단하나의 교정, 맞춤교정프로그램',"es"=>'단하나의 교정, 맞춤교정프로그램',"tr"=>'단하나의 교정, 맞춤교정프로그램',"vi"=>'단하나의 교정, 맞춤교정프로그램',"mn"=>'단하나의 교정, 맞춤교정프로그램',); $_menu_names[195] = array("en"=>'상담부터 교정까지, 원데이프로그램',"ko"=>'상담부터 교정까지, 원데이프로그램',"jp"=>'상담부터 교정까지, 원데이프로그램',"zh-CN"=>'상담부터 교정까지, 원데이프로그램',"zh-TW"=>'상담부터 교정까지, 원데이프로그램',"fr"=>'상담부터 교정까지, 원데이프로그램',"de"=>'상담부터 교정까지, 원데이프로그램',"ru"=>'상담부터 교정까지, 원데이프로그램',"es"=>'상담부터 교정까지, 원데이프로그램',"tr"=>'상담부터 교정까지, 원데이프로그램',"vi"=>'상담부터 교정까지, 원데이프로그램',"mn"=>'상담부터 교정까지, 원데이프로그램',); $_menu_names[196] = array("en"=>'4스텝, 상담프로그램',"ko"=>'4스텝, 상담프로그램',"jp"=>'4스텝, 상담프로그램',"zh-CN"=>'4스텝, 상담프로그램',"zh-TW"=>'4스텝, 상담프로그램',"fr"=>'4스텝, 상담프로그램',"de"=>'4스텝, 상담프로그램',"ru"=>'4스텝, 상담프로그램',"es"=>'4스텝, 상담프로그램',"tr"=>'4스텝, 상담프로그램',"vi"=>'4스텝, 상담프로그램',"mn"=>'4스텝, 상담프로그램',); $_menu_names[197] = array("en"=>'교정보다 중요한 관리, 사후관리프로그램',"ko"=>'교정보다 중요한 관리, 사후관리프로그램',"jp"=>'교정보다 중요한 관리, 사후관리프로그램',"zh-CN"=>'교정보다 중요한 관리, 사후관리프로그램',"zh-TW"=>'교정보다 중요한 관리, 사후관리프로그램',"fr"=>'교정보다 중요한 관리, 사후관리프로그램',"de"=>'교정보다 중요한 관리, 사후관리프로그램',"ru"=>'교정보다 중요한 관리, 사후관리프로그램',"es"=>'교정보다 중요한 관리, 사후관리프로그램',"tr"=>'교정보다 중요한 관리, 사후관리프로그램',"vi"=>'교정보다 중요한 관리, 사후관리프로그램',"mn"=>'교정보다 중요한 관리, 사후관리프로그램',); $_menu_names[147] = array("en"=>'시기별교정',"ko"=>'시기별교정',"jp"=>'시기별교정',"zh-CN"=>'시기별교정',"zh-TW"=>'시기별교정',"fr"=>'시기별교정',"de"=>'시기별교정',"ru"=>'시기별교정',"es"=>'시기별교정',"tr"=>'시기별교정',"vi"=>'시기별교정',"mn"=>'시기별교정',); $_menu_names[149] = array("en"=>'성장기교정',"ko"=>'성장기교정',"jp"=>'성장기교정',"zh-CN"=>'성장기교정',"zh-TW"=>'성장기교정',"fr"=>'성장기교정',"de"=>'성장기교정',"ru"=>'성장기교정',"es"=>'성장기교정',"tr"=>'성장기교정',"vi"=>'성장기교정',"mn"=>'성장기교정',); $_menu_names[151] = array("en"=>'성인교정',"ko"=>'성인교정',"jp"=>'성인교정',"zh-CN"=>'성인교정',"zh-TW"=>'성인교정',"fr"=>'성인교정',"de"=>'성인교정',"ru"=>'성인교정',"es"=>'성인교정',"tr"=>'성인교정',"vi"=>'성인교정',"mn"=>'성인교정',); $_menu_names[152] = array("en"=>'증상별교정',"ko"=>'증상별교정',"jp"=>'증상별교정',"zh-CN"=>'증상별교정',"zh-TW"=>'증상별교정',"fr"=>'증상별교정',"de"=>'증상별교정',"ru"=>'증상별교정',"es"=>'증상별교정',"tr"=>'증상별교정',"vi"=>'증상별교정',"mn"=>'증상별교정',); $_menu_names[154] = array("en"=>'덧니교정',"ko"=>'덧니교정',"jp"=>'덧니교정',"zh-CN"=>'덧니교정',"zh-TW"=>'덧니교정',"fr"=>'덧니교정',"de"=>'덧니교정',"ru"=>'덧니교정',"es"=>'덧니교정',"tr"=>'덧니교정',"vi"=>'덧니교정',"mn"=>'덧니교정',); $_menu_names[156] = array("en"=>'돌출입교정',"ko"=>'돌출입교정',"jp"=>'돌출입교정',"zh-CN"=>'돌출입교정',"zh-TW"=>'돌출입교정',"fr"=>'돌출입교정',"de"=>'돌출입교정',"ru"=>'돌출입교정',"es"=>'돌출입교정',"tr"=>'돌출입교정',"vi"=>'돌출입교정',"mn"=>'돌출입교정',); $_menu_names[158] = array("en"=>'주걱턱교정',"ko"=>'주걱턱교정',"jp"=>'주걱턱교정',"zh-CN"=>'주걱턱교정',"zh-TW"=>'주걱턱교정',"fr"=>'주걱턱교정',"de"=>'주걱턱교정',"ru"=>'주걱턱교정',"es"=>'주걱턱교정',"tr"=>'주걱턱교정',"vi"=>'주걱턱교정',"mn"=>'주걱턱교정',); $_menu_names[160] = array("en"=>'무턱교정',"ko"=>'무턱교정',"jp"=>'무턱교정',"zh-CN"=>'무턱교정',"zh-TW"=>'무턱교정',"fr"=>'무턱교정',"de"=>'무턱교정',"ru"=>'무턱교정',"es"=>'무턱교정',"tr"=>'무턱교정',"vi"=>'무턱교정',"mn"=>'무턱교정',); $_menu_names[162] = array("en"=>'비발치교정',"ko"=>'비발치교정',"jp"=>'비발치교정',"zh-CN"=>'비발치교정',"zh-TW"=>'비발치교정',"fr"=>'비발치교정',"de"=>'비발치교정',"ru"=>'비발치교정',"es"=>'비발치교정',"tr"=>'비발치교정',"vi"=>'비발치교정',"mn"=>'비발치교정',); $_menu_names[164] = array("en"=>'재교정',"ko"=>'재교정',"jp"=>'재교정',"zh-CN"=>'재교정',"zh-TW"=>'재교정',"fr"=>'재교정',"de"=>'재교정',"ru"=>'재교정',"es"=>'재교정',"tr"=>'재교정',"vi"=>'재교정',"mn"=>'재교정',); $_menu_names[166] = array("en"=>'매복치교정',"ko"=>'매복치교정',"jp"=>'매복치교정',"zh-CN"=>'매복치교정',"zh-TW"=>'매복치교정',"fr"=>'매복치교정',"de"=>'매복치교정',"ru"=>'매복치교정',"es"=>'매복치교정',"tr"=>'매복치교정',"vi"=>'매복치교정',"mn"=>'매복치교정',); $_menu_names[168] = array("en"=>'결손치교정',"ko"=>'결손치교정',"jp"=>'결손치교정',"zh-CN"=>'결손치교정',"zh-TW"=>'결손치교정',"fr"=>'결손치교정',"de"=>'결손치교정',"ru"=>'결손치교정',"es"=>'결손치교정',"tr"=>'결손치교정',"vi"=>'결손치교정',"mn"=>'결손치교정',); $_menu_names[170] = array("en"=>'보철교정',"ko"=>'보철교정',"jp"=>'보철교정',"zh-CN"=>'보철교정',"zh-TW"=>'보철교정',"fr"=>'보철교정',"de"=>'보철교정',"ru"=>'보철교정',"es"=>'보철교정',"tr"=>'보철교정',"vi"=>'보철교정',"mn"=>'보철교정',); $_menu_names[171] = array("en"=>'장치별교정',"ko"=>'장치별교정',"jp"=>'장치별교정',"zh-CN"=>'장치별교정',"zh-TW"=>'장치별교정',"fr"=>'장치별교정',"de"=>'장치별교정',"ru"=>'장치별교정',"es"=>'장치별교정',"tr"=>'장치별교정',"vi"=>'장치별교정',"mn"=>'장치별교정',); $_menu_names[173] = array("en"=>'설측교정',"ko"=>'설측교정',"jp"=>'설측교정',"zh-CN"=>'설측교정',"zh-TW"=>'설측교정',"fr"=>'설측교정',"de"=>'설측교정',"ru"=>'설측교정',"es"=>'설측교정',"tr"=>'설측교정',"vi"=>'설측교정',"mn"=>'설측교정',); $_menu_names[175] = array("en"=>'부분교정',"ko"=>'부분교정',"jp"=>'부분교정',"zh-CN"=>'부분교정',"zh-TW"=>'부분교정',"fr"=>'부분교정',"de"=>'부분교정',"ru"=>'부분교정',"es"=>'부분교정',"tr"=>'부분교정',"vi"=>'부분교정',"mn"=>'부분교정',); $_menu_names[177] = array("en"=>'Clippy C 교정',"ko"=>'Clippy C 교정',"jp"=>'Clippy C 교정',"zh-CN"=>'Clippy C 교정',"zh-TW"=>'Clippy C 교정',"fr"=>'Clippy C 교정',"de"=>'Clippy C 교정',"ru"=>'Clippy C 교정',"es"=>'Clippy C 교정',"tr"=>'Clippy C 교정',"vi"=>'Clippy C 교정',"mn"=>'Clippy C 교정',); $_menu_names[179] = array("en"=>'3M 클라리티 교정',"ko"=>'3M 클라리티 교정',"jp"=>'3M 클라리티 교정',"zh-CN"=>'3M 클라리티 교정',"zh-TW"=>'3M 클라리티 교정',"fr"=>'3M 클라리티 교정',"de"=>'3M 클라리티 교정',"ru"=>'3M 클라리티 교정',"es"=>'3M 클라리티 교정',"tr"=>'3M 클라리티 교정',"vi"=>'3M 클라리티 교정',"mn"=>'3M 클라리티 교정',); $_menu_names[181] = array("en"=>'투명교정',"ko"=>'투명교정',"jp"=>'투명교정',"zh-CN"=>'투명교정',"zh-TW"=>'투명교정',"fr"=>'투명교정',"de"=>'투명교정',"ru"=>'투명교정',"es"=>'투명교정',"tr"=>'투명교정',"vi"=>'투명교정',"mn"=>'투명교정',); $_menu_names[182] = array("en"=>'교정후기',"ko"=>'교정후기',"jp"=>'교정후기',"zh-CN"=>'교정후기',"zh-TW"=>'교정후기',"fr"=>'교정후기',"de"=>'교정후기',"ru"=>'교정후기',"es"=>'교정후기',"tr"=>'교정후기',"vi"=>'교정후기',"mn"=>'교정후기',); $_menu_names[184] = array("en"=>'교정후기',"ko"=>'교정후기',"jp"=>'교정후기',"zh-CN"=>'교정후기',"zh-TW"=>'교정후기',"fr"=>'교정후기',"de"=>'교정후기',"ru"=>'교정후기',"es"=>'교정후기',"tr"=>'교정후기',"vi"=>'교정후기',"mn"=>'교정후기',); $_menu_names[299] = array("en"=>'교정 환자를 위한 Tips',"ko"=>'교정 환자를 위한 Tips',"jp"=>'교정 환자를 위한 Tips',"zh-CN"=>'교정 환자를 위한 Tips',"zh-TW"=>'교정 환자를 위한 Tips',"fr"=>'교정 환자를 위한 Tips',"de"=>'교정 환자를 위한 Tips',"ru"=>'교정 환자를 위한 Tips',"es"=>'교정 환자를 위한 Tips',"tr"=>'교정 환자를 위한 Tips',"vi"=>'교정 환자를 위한 Tips',"mn"=>'교정 환자를 위한 Tips',); $_menu_names[186] = array("en"=>'치료사례',"ko"=>'치료사례',"jp"=>'치료사례',"zh-CN"=>'치료사례',"zh-TW"=>'치료사례',"fr"=>'치료사례',"de"=>'치료사례',"ru"=>'치료사례',"es"=>'치료사례',"tr"=>'치료사례',"vi"=>'치료사례',"mn"=>'치료사례',); $_menu_names[188] = array("en"=>'공지사항',"ko"=>'공지사항',"jp"=>'공지사항',"zh-CN"=>'공지사항',"zh-TW"=>'공지사항',"fr"=>'공지사항',"de"=>'공지사항',"ru"=>'공지사항',"es"=>'공지사항',"tr"=>'공지사항',"vi"=>'공지사항',"mn"=>'공지사항',); ; $menu->list = array(139=>array("node_srl" => 139, "parent_srl" => 0, "menu_name_key" => '치과소개', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[139][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','intro') : ""), "url" => (true ? 'intro' : ""), "is_shortcut" => 'N', "desc" => '로미오치과교정과 치과소개', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("intro","/intro#doc-time","/intro#location","intro") && in_array(Context::get("mid"), array("intro","/intro#doc-time","/intro#location","intro")) ? 1 : 0), "expand" => 'N', "list" => array(140=>array("node_srl" => 140, "parent_srl" => 139, "menu_name_key" => '의료진소개', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[140][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','intro') : ""), "url" => (true ? 'intro' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("intro") && in_array(Context::get("mid"), array("intro")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("intro") && in_array(Context::get("mid"), array("intro")) ? $_menu_names[140][$lang_type] : $_menu_names[140][$lang_type]) : ""),),141=>array("node_srl" => 141, "parent_srl" => 139, "menu_name_key" => '의료진별 진료시간', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[141][$lang_type] : ""), "href" => (true ? '/intro#doc-time' : ""), "url" => (true ? '/intro#doc-time' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("/intro#doc-time") && in_array(Context::get("mid"), array("/intro#doc-time")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("/intro#doc-time") && in_array(Context::get("mid"), array("/intro#doc-time")) ? $_menu_names[141][$lang_type] : $_menu_names[141][$lang_type]) : ""),),142=>array("node_srl" => 142, "parent_srl" => 139, "menu_name_key" => '진료시간 & 오시는길', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[142][$lang_type] : ""), "href" => (true ? '/intro#location' : ""), "url" => (true ? '/intro#location' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("/intro#location") && in_array(Context::get("mid"), array("/intro#location")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("/intro#location") && in_array(Context::get("mid"), array("/intro#location")) ? $_menu_names[142][$lang_type] : $_menu_names[142][$lang_type]) : ""),),), "link" => (true ? (array("intro","/intro#doc-time","/intro#location","intro") && in_array(Context::get("mid"), array("intro","/intro#doc-time","/intro#location","intro")) ? $_menu_names[139][$lang_type] : $_menu_names[139][$lang_type]) : ""),),144=>array("node_srl" => 144, "parent_srl" => 0, "menu_name_key" => '20년간 한자리, 교정전문치과', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[144][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','years20') : ""), "url" => (true ? 'years20' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("years20","/years20#years20","/years20#primary_care","/years20#satisfy","/years20#review","years20") && in_array(Context::get("mid"), array("years20","/years20#years20","/years20#primary_care","/years20#satisfy","/years20#review","years20")) ? 1 : 0), "expand" => 'N', "list" => array(189=>array("node_srl" => 189, "parent_srl" => 144, "menu_name_key" => '교정학박사&교정전문의의 전문성', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[189][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','years20') : ""), "url" => (true ? 'years20' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("years20") && in_array(Context::get("mid"), array("years20")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("years20") && in_array(Context::get("mid"), array("years20")) ? $_menu_names[189][$lang_type] : $_menu_names[189][$lang_type]) : ""),),190=>array("node_srl" => 190, "parent_srl" => 144, "menu_name_key" => '20년, 교정치료 노하우', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[190][$lang_type] : ""), "href" => (true ? '/years20#years20' : ""), "url" => (true ? '/years20#years20' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("/years20#years20") && in_array(Context::get("mid"), array("/years20#years20")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("/years20#years20") && in_array(Context::get("mid"), array("/years20#years20")) ? $_menu_names[190][$lang_type] : $_menu_names[190][$lang_type]) : ""),),191=>array("node_srl" => 191, "parent_srl" => 144, "menu_name_key" => '바뀌지 않는 평생 교정주치의', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[191][$lang_type] : ""), "href" => (true ? '/years20#primary_care' : ""), "url" => (true ? '/years20#primary_care' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("/years20#primary_care") && in_array(Context::get("mid"), array("/years20#primary_care")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("/years20#primary_care") && in_array(Context::get("mid"), array("/years20#primary_care")) ? $_menu_names[191][$lang_type] : $_menu_names[191][$lang_type]) : ""),),192=>array("node_srl" => 192, "parent_srl" => 144, "menu_name_key" => '소문내고 싶은 교정만족도', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[192][$lang_type] : ""), "href" => (true ? '/years20#satisfy' : ""), "url" => (true ? '/years20#satisfy' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("/years20#satisfy") && in_array(Context::get("mid"), array("/years20#satisfy")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("/years20#satisfy") && in_array(Context::get("mid"), array("/years20#satisfy")) ? $_menu_names[192][$lang_type] : $_menu_names[192][$lang_type]) : ""),),193=>array("node_srl" => 193, "parent_srl" => 144, "menu_name_key" => '후기가 보장하는 치료 퀄리티', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[193][$lang_type] : ""), "href" => (true ? '/years20#review' : ""), "url" => (true ? '/years20#review' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("/years20#review") && in_array(Context::get("mid"), array("/years20#review")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("/years20#review") && in_array(Context::get("mid"), array("/years20#review")) ? $_menu_names[193][$lang_type] : $_menu_names[193][$lang_type]) : ""),),), "link" => (true ? (array("years20","/years20#years20","/years20#primary_care","/years20#satisfy","/years20#review","years20") && in_array(Context::get("mid"), array("years20","/years20#years20","/years20#primary_care","/years20#satisfy","/years20#review","years20")) ? $_menu_names[144][$lang_type] : $_menu_names[144][$lang_type]) : ""),),146=>array("node_srl" => 146, "parent_srl" => 0, "menu_name_key" => '교정과전문의의 교정프로그램', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[146][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','program') : ""), "url" => (true ? 'program' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("program","/program#oneday","/program#step4","/program#after_service","program") && in_array(Context::get("mid"), array("program","/program#oneday","/program#step4","/program#after_service","program")) ? 1 : 0), "expand" => 'N', "list" => array(194=>array("node_srl" => 194, "parent_srl" => 146, "menu_name_key" => '단하나의 교정, 맞춤교정프로그램', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[194][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','program') : ""), "url" => (true ? 'program' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("program") && in_array(Context::get("mid"), array("program")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("program") && in_array(Context::get("mid"), array("program")) ? $_menu_names[194][$lang_type] : $_menu_names[194][$lang_type]) : ""),),195=>array("node_srl" => 195, "parent_srl" => 146, "menu_name_key" => '상담부터 교정까지, 원데이프로그램', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[195][$lang_type] : ""), "href" => (true ? '/program#oneday' : ""), "url" => (true ? '/program#oneday' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("/program#oneday") && in_array(Context::get("mid"), array("/program#oneday")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("/program#oneday") && in_array(Context::get("mid"), array("/program#oneday")) ? $_menu_names[195][$lang_type] : $_menu_names[195][$lang_type]) : ""),),196=>array("node_srl" => 196, "parent_srl" => 146, "menu_name_key" => '4스텝, 상담프로그램', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[196][$lang_type] : ""), "href" => (true ? '/program#step4' : ""), "url" => (true ? '/program#step4' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("/program#step4") && in_array(Context::get("mid"), array("/program#step4")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("/program#step4") && in_array(Context::get("mid"), array("/program#step4")) ? $_menu_names[196][$lang_type] : $_menu_names[196][$lang_type]) : ""),),197=>array("node_srl" => 197, "parent_srl" => 146, "menu_name_key" => '교정보다 중요한 관리, 사후관리프로그램', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[197][$lang_type] : ""), "href" => (true ? '/program#after_service' : ""), "url" => (true ? '/program#after_service' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("/program#after_service") && in_array(Context::get("mid"), array("/program#after_service")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("/program#after_service") && in_array(Context::get("mid"), array("/program#after_service")) ? $_menu_names[197][$lang_type] : $_menu_names[197][$lang_type]) : ""),),), "link" => (true ? (array("program","/program#oneday","/program#step4","/program#after_service","program") && in_array(Context::get("mid"), array("program","/program#oneday","/program#step4","/program#after_service","program")) ? $_menu_names[146][$lang_type] : $_menu_names[146][$lang_type]) : ""),),147=>array("node_srl" => 147, "parent_srl" => 0, "menu_name_key" => '시기별교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[147][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','youth') : ""), "url" => (true ? 'youth' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("youth","adult","youth") && in_array(Context::get("mid"), array("youth","adult","youth")) ? 1 : 0), "expand" => 'N', "list" => array(149=>array("node_srl" => 149, "parent_srl" => 147, "menu_name_key" => '성장기교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[149][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','youth') : ""), "url" => (true ? 'youth' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("youth") && in_array(Context::get("mid"), array("youth")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("youth") && in_array(Context::get("mid"), array("youth")) ? $_menu_names[149][$lang_type] : $_menu_names[149][$lang_type]) : ""),),151=>array("node_srl" => 151, "parent_srl" => 147, "menu_name_key" => '성인교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[151][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','adult') : ""), "url" => (true ? 'adult' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("adult") && in_array(Context::get("mid"), array("adult")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("adult") && in_array(Context::get("mid"), array("adult")) ? $_menu_names[151][$lang_type] : $_menu_names[151][$lang_type]) : ""),),), "link" => (true ? (array("youth","adult","youth") && in_array(Context::get("mid"), array("youth","adult","youth")) ? $_menu_names[147][$lang_type] : $_menu_names[147][$lang_type]) : ""),),152=>array("node_srl" => 152, "parent_srl" => 0, "menu_name_key" => '증상별교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[152][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','projecting') : ""), "url" => (true ? 'projecting' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("projecting","protruding","lantern","microgenia","non_extraction","after_braces","impacted_teeth","missing_teeth","custom_orthodontics","projecting") && in_array(Context::get("mid"), array("projecting","protruding","lantern","microgenia","non_extraction","after_braces","impacted_teeth","missing_teeth","custom_orthodontics","projecting")) ? 1 : 0), "expand" => 'N', "list" => array(154=>array("node_srl" => 154, "parent_srl" => 152, "menu_name_key" => '덧니교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[154][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','projecting') : ""), "url" => (true ? 'projecting' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("projecting") && in_array(Context::get("mid"), array("projecting")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("projecting") && in_array(Context::get("mid"), array("projecting")) ? $_menu_names[154][$lang_type] : $_menu_names[154][$lang_type]) : ""),),156=>array("node_srl" => 156, "parent_srl" => 152, "menu_name_key" => '돌출입교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[156][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','protruding') : ""), "url" => (true ? 'protruding' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("protruding") && in_array(Context::get("mid"), array("protruding")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("protruding") && in_array(Context::get("mid"), array("protruding")) ? $_menu_names[156][$lang_type] : $_menu_names[156][$lang_type]) : ""),),158=>array("node_srl" => 158, "parent_srl" => 152, "menu_name_key" => '주걱턱교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[158][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','lantern') : ""), "url" => (true ? 'lantern' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("lantern") && in_array(Context::get("mid"), array("lantern")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("lantern") && in_array(Context::get("mid"), array("lantern")) ? $_menu_names[158][$lang_type] : $_menu_names[158][$lang_type]) : ""),),160=>array("node_srl" => 160, "parent_srl" => 152, "menu_name_key" => '무턱교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[160][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','microgenia') : ""), "url" => (true ? 'microgenia' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("microgenia") && in_array(Context::get("mid"), array("microgenia")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("microgenia") && in_array(Context::get("mid"), array("microgenia")) ? $_menu_names[160][$lang_type] : $_menu_names[160][$lang_type]) : ""),),162=>array("node_srl" => 162, "parent_srl" => 152, "menu_name_key" => '비발치교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[162][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','non_extraction') : ""), "url" => (true ? 'non_extraction' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("non_extraction") && in_array(Context::get("mid"), array("non_extraction")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("non_extraction") && in_array(Context::get("mid"), array("non_extraction")) ? $_menu_names[162][$lang_type] : $_menu_names[162][$lang_type]) : ""),),164=>array("node_srl" => 164, "parent_srl" => 152, "menu_name_key" => '재교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[164][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','after_braces') : ""), "url" => (true ? 'after_braces' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("after_braces") && in_array(Context::get("mid"), array("after_braces")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("after_braces") && in_array(Context::get("mid"), array("after_braces")) ? $_menu_names[164][$lang_type] : $_menu_names[164][$lang_type]) : ""),),166=>array("node_srl" => 166, "parent_srl" => 152, "menu_name_key" => '매복치교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[166][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','impacted_teeth') : ""), "url" => (true ? 'impacted_teeth' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("impacted_teeth") && in_array(Context::get("mid"), array("impacted_teeth")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("impacted_teeth") && in_array(Context::get("mid"), array("impacted_teeth")) ? $_menu_names[166][$lang_type] : $_menu_names[166][$lang_type]) : ""),),168=>array("node_srl" => 168, "parent_srl" => 152, "menu_name_key" => '결손치교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[168][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','missing_teeth') : ""), "url" => (true ? 'missing_teeth' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("missing_teeth") && in_array(Context::get("mid"), array("missing_teeth")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("missing_teeth") && in_array(Context::get("mid"), array("missing_teeth")) ? $_menu_names[168][$lang_type] : $_menu_names[168][$lang_type]) : ""),),170=>array("node_srl" => 170, "parent_srl" => 152, "menu_name_key" => '보철교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[170][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','custom_orthodontics') : ""), "url" => (true ? 'custom_orthodontics' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("custom_orthodontics") && in_array(Context::get("mid"), array("custom_orthodontics")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("custom_orthodontics") && in_array(Context::get("mid"), array("custom_orthodontics")) ? $_menu_names[170][$lang_type] : $_menu_names[170][$lang_type]) : ""),),), "link" => (true ? (array("projecting","protruding","lantern","microgenia","non_extraction","after_braces","impacted_teeth","missing_teeth","custom_orthodontics","projecting") && in_array(Context::get("mid"), array("projecting","protruding","lantern","microgenia","non_extraction","after_braces","impacted_teeth","missing_teeth","custom_orthodontics","projecting")) ? $_menu_names[152][$lang_type] : $_menu_names[152][$lang_type]) : ""),),171=>array("node_srl" => 171, "parent_srl" => 0, "menu_name_key" => '장치별교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[171][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','inside') : ""), "url" => (true ? 'inside' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("inside","part","clippy_c","clarity","invisalign","inside") && in_array(Context::get("mid"), array("inside","part","clippy_c","clarity","invisalign","inside")) ? 1 : 0), "expand" => 'N', "list" => array(173=>array("node_srl" => 173, "parent_srl" => 171, "menu_name_key" => '설측교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[173][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','inside') : ""), "url" => (true ? 'inside' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("inside") && in_array(Context::get("mid"), array("inside")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("inside") && in_array(Context::get("mid"), array("inside")) ? $_menu_names[173][$lang_type] : $_menu_names[173][$lang_type]) : ""),),175=>array("node_srl" => 175, "parent_srl" => 171, "menu_name_key" => '부분교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[175][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','part') : ""), "url" => (true ? 'part' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("part") && in_array(Context::get("mid"), array("part")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("part") && in_array(Context::get("mid"), array("part")) ? $_menu_names[175][$lang_type] : $_menu_names[175][$lang_type]) : ""),),177=>array("node_srl" => 177, "parent_srl" => 171, "menu_name_key" => 'Clippy C 교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[177][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','clippy_c') : ""), "url" => (true ? 'clippy_c' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("clippy_c") && in_array(Context::get("mid"), array("clippy_c")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("clippy_c") && in_array(Context::get("mid"), array("clippy_c")) ? $_menu_names[177][$lang_type] : $_menu_names[177][$lang_type]) : ""),),179=>array("node_srl" => 179, "parent_srl" => 171, "menu_name_key" => '3M 클라리티 교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[179][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','clarity') : ""), "url" => (true ? 'clarity' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("clarity") && in_array(Context::get("mid"), array("clarity")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("clarity") && in_array(Context::get("mid"), array("clarity")) ? $_menu_names[179][$lang_type] : $_menu_names[179][$lang_type]) : ""),),181=>array("node_srl" => 181, "parent_srl" => 171, "menu_name_key" => '투명교정', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[181][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','invisalign') : ""), "url" => (true ? 'invisalign' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("invisalign") && in_array(Context::get("mid"), array("invisalign")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("invisalign") && in_array(Context::get("mid"), array("invisalign")) ? $_menu_names[181][$lang_type] : $_menu_names[181][$lang_type]) : ""),),), "link" => (true ? (array("inside","part","clippy_c","clarity","invisalign","inside") && in_array(Context::get("mid"), array("inside","part","clippy_c","clarity","invisalign","inside")) ? $_menu_names[171][$lang_type] : $_menu_names[171][$lang_type]) : ""),),182=>array("node_srl" => 182, "parent_srl" => 0, "menu_name_key" => '교정후기', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[182][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','review') : ""), "url" => (true ? 'review' : ""), "is_shortcut" => 'Y', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("review","tips","case","notice","review") && in_array(Context::get("mid"), array("review","tips","case","notice","review")) ? 1 : 0), "expand" => 'N', "list" => array(184=>array("node_srl" => 184, "parent_srl" => 182, "menu_name_key" => '교정후기', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[184][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','review') : ""), "url" => (true ? 'review' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("review") && in_array(Context::get("mid"), array("review")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("review") && in_array(Context::get("mid"), array("review")) ? $_menu_names[184][$lang_type] : $_menu_names[184][$lang_type]) : ""),),299=>array("node_srl" => 299, "parent_srl" => 182, "menu_name_key" => '교정 환자를 위한 Tips', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[299][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','tips') : ""), "url" => (true ? 'tips' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("tips") && in_array(Context::get("mid"), array("tips")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("tips") && in_array(Context::get("mid"), array("tips")) ? $_menu_names[299][$lang_type] : $_menu_names[299][$lang_type]) : ""),),186=>array("node_srl" => 186, "parent_srl" => 182, "menu_name_key" => '치료사례', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[186][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','case') : ""), "url" => (true ? 'case' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("case") && in_array(Context::get("mid"), array("case")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("case") && in_array(Context::get("mid"), array("case")) ? $_menu_names[186][$lang_type] : $_menu_names[186][$lang_type]) : ""),),188=>array("node_srl" => 188, "parent_srl" => 182, "menu_name_key" => '공지사항', "isShow" => (true ? true : false), "text" => (true ? $_menu_names[188][$lang_type] : ""), "href" => (true ? getSiteUrl('', '','mid','notice') : ""), "url" => (true ? 'notice' : ""), "is_shortcut" => 'N', "desc" => '', "open_window" => 'N', "normal_btn" => '', "hover_btn" => '', "active_btn" => '', "selected" => (array("notice") && in_array(Context::get("mid"), array("notice")) ? 1 : 0), "expand" => 'N', "list" => array(), "link" => (true ? (array("notice") && in_array(Context::get("mid"), array("notice")) ? $_menu_names[188][$lang_type] : $_menu_names[188][$lang_type]) : ""),),), "link" => (true ? (array("review","tips","case","notice","review") && in_array(Context::get("mid"), array("review","tips","case","notice","review")) ? $_menu_names[182][$lang_type] : $_menu_names[182][$lang_type]) : ""),),); if(!$is_admin) { recurciveExposureCheck($menu->list); }Context::set("included_menu", $menu); ?>