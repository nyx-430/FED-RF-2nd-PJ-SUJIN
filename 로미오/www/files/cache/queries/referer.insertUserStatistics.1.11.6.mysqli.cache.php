<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("insertUserStatistics");
$query->setAction("insert");
$query->setPriority("");
if(isset($args->member_srl)) {
${'member_srl22_argument'} = new Argument('member_srl', $args->{'member_srl'});
if(!${'member_srl22_argument'}->isValid()) return ${'member_srl22_argument'}->getErrorMessage();
} else
${'member_srl22_argument'} = NULL;if(${'member_srl22_argument'} !== null) ${'member_srl22_argument'}->setColumnType('number');

${'count23_argument'} = new Argument('count', $args->{'count'});
${'count23_argument'}->ensureDefaultValue('1');
if(!${'count23_argument'}->isValid()) return ${'count23_argument'}->getErrorMessage();
if(${'count23_argument'} !== null) ${'count23_argument'}->setColumnType('number');

$query->setColumns(array(
new InsertExpression('`member_srl`', ${'member_srl22_argument'})
,new InsertExpression('`count`', ${'count23_argument'})
));
$query->setTables(array(
new Table('`xe_referer_user_statistics`', '`referer_user_statistics`')
));
$query->setConditions(array());
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>