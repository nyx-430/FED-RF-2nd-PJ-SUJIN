<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("getRefererLogDocumentSlrColumnsZeroCount");
$query->setAction("select");
$query->setPriority("");

$query->setColumns(array(
new SelectExpression('count(*)', '`count`')
));
$query->setTables(array(
new Table('`xe_referer_log`', '`referer_log`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithoutArgument('`ref_document_srl`','0',"equal")))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>