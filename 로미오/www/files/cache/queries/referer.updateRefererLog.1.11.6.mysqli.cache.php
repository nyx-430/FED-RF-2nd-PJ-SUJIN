<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("updateRefererLog");
$query->setAction("update");
$query->setPriority("");

${'regdate_last1_argument'} = new Argument('regdate_last', $args->{'regdate_last'});
${'regdate_last1_argument'}->ensureDefaultValue(date("YmdHis"));
${'regdate_last1_argument'}->checkNotNull();
if(!${'regdate_last1_argument'}->isValid()) return ${'regdate_last1_argument'}->getErrorMessage();
if(${'regdate_last1_argument'} !== null) ${'regdate_last1_argument'}->setColumnType('date');
if(isset($args->request_uri)) {
${'request_uri2_argument'} = new Argument('request_uri', $args->{'request_uri'});
if(!${'request_uri2_argument'}->isValid()) return ${'request_uri2_argument'}->getErrorMessage();
} else
${'request_uri2_argument'} = NULL;if(${'request_uri2_argument'} !== null) ${'request_uri2_argument'}->setColumnType('varchar');
if(isset($args->ref_mid)) {
${'ref_mid3_argument'} = new Argument('ref_mid', $args->{'ref_mid'});
if(!${'ref_mid3_argument'}->isValid()) return ${'ref_mid3_argument'}->getErrorMessage();
} else
${'ref_mid3_argument'} = NULL;if(${'ref_mid3_argument'} !== null) ${'ref_mid3_argument'}->setColumnType('varchar');
if(isset($args->ref_document_srl)) {
${'ref_document_srl4_argument'} = new Argument('ref_document_srl', $args->{'ref_document_srl'});
if(!${'ref_document_srl4_argument'}->isValid()) return ${'ref_document_srl4_argument'}->getErrorMessage();
} else
${'ref_document_srl4_argument'} = NULL;if(${'ref_document_srl4_argument'} !== null) ${'ref_document_srl4_argument'}->setColumnType('number');

${'count5_argument'} = new Argument('count', $args->{'count'});
${'count5_argument'}->setColumnOperation('+');
${'count5_argument'}->ensureDefaultValue(1);
if(!${'count5_argument'}->isValid()) return ${'count5_argument'}->getErrorMessage();
if(${'count5_argument'} !== null) ${'count5_argument'}->setColumnType('number');
if(isset($args->remote)) {
${'remote6_argument'} = new ConditionArgument('remote', $args->remote, 'equal');
${'remote6_argument'}->createConditionValue();
if(!${'remote6_argument'}->isValid()) return ${'remote6_argument'}->getErrorMessage();
} else
${'remote6_argument'} = NULL;if(${'remote6_argument'} !== null) ${'remote6_argument'}->setColumnType('varchar');
if(isset($args->url)) {
${'url7_argument'} = new ConditionArgument('url', $args->url, 'equal');
${'url7_argument'}->createConditionValue();
if(!${'url7_argument'}->isValid()) return ${'url7_argument'}->getErrorMessage();
} else
${'url7_argument'} = NULL;if(${'url7_argument'} !== null) ${'url7_argument'}->setColumnType('varchar');

${'uagent8_argument'} = new ConditionArgument('uagent', $args->uagent, 'equal');
${'uagent8_argument'}->checkNotNull();
${'uagent8_argument'}->createConditionValue();
if(!${'uagent8_argument'}->isValid()) return ${'uagent8_argument'}->getErrorMessage();
if(${'uagent8_argument'} !== null) ${'uagent8_argument'}->setColumnType('varchar');
if(isset($args->member_srl)) {
${'member_srl9_argument'} = new ConditionArgument('member_srl', $args->member_srl, 'equal');
${'member_srl9_argument'}->createConditionValue();
if(!${'member_srl9_argument'}->isValid()) return ${'member_srl9_argument'}->getErrorMessage();
} else
${'member_srl9_argument'} = NULL;if(${'member_srl9_argument'} !== null) ${'member_srl9_argument'}->setColumnType('number');

${'regdate10_argument'} = new ConditionArgument('regdate', $args->regdate, 'equal');
${'regdate10_argument'}->checkFilter('number');
${'regdate10_argument'}->checkNotNull();
${'regdate10_argument'}->createConditionValue();
if(!${'regdate10_argument'}->isValid()) return ${'regdate10_argument'}->getErrorMessage();
if(${'regdate10_argument'} !== null) ${'regdate10_argument'}->setColumnType('date');

$query->setColumns(array(
new UpdateExpression('`regdate_last`', ${'regdate_last1_argument'})
,new UpdateExpression('`request_uri`', ${'request_uri2_argument'})
,new UpdateExpression('`ref_mid`', ${'ref_mid3_argument'})
,new UpdateExpression('`ref_document_srl`', ${'ref_document_srl4_argument'})
,new UpdateExpression('`count`', ${'count5_argument'})
));
$query->setTables(array(
new Table('`xe_referer_log`', '`referer_log`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`remote`',$remote6_argument,"equal")
,new ConditionWithArgument('`url`',$url7_argument,"equal", 'and')
,new ConditionWithArgument('`uagent`',$uagent8_argument,"equal", 'and')
,new ConditionWithArgument('`member_srl`',$member_srl9_argument,"equal", 'and')
,new ConditionWithArgument('`regdate`',$regdate10_argument,"equal", 'and')))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>