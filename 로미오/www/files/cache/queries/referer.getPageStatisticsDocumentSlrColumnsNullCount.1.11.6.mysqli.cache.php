<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("getPageStatisticsDocumentSlrColumnsNullCount");
$query->setAction("select");
$query->setPriority("");

$query->setColumns(array(
new SelectExpression('count(*)', '`count`')
));
$query->setTables(array(
new Table('`xe_referer_page_statistics`', '`referer_page_statistics`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithoutArgument('`ref_document_srl`','``',"null")))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>