<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("getPageStatus");
$query->setAction("select");
$query->setPriority("");
if(isset($args->ref_mid)) {
${'ref_mid24_argument'} = new ConditionArgument('ref_mid', $args->ref_mid, 'equal');
${'ref_mid24_argument'}->createConditionValue();
if(!${'ref_mid24_argument'}->isValid()) return ${'ref_mid24_argument'}->getErrorMessage();
} else
${'ref_mid24_argument'} = NULL;if(${'ref_mid24_argument'} !== null) ${'ref_mid24_argument'}->setColumnType('varchar');

${'ref_document_srl25_argument'} = new ConditionArgument('ref_document_srl', $args->ref_document_srl, 'equal');
${'ref_document_srl25_argument'}->ensureDefaultValue('-1');
${'ref_document_srl25_argument'}->checkNotNull();
${'ref_document_srl25_argument'}->createConditionValue();
if(!${'ref_document_srl25_argument'}->isValid()) return ${'ref_document_srl25_argument'}->getErrorMessage();
if(${'ref_document_srl25_argument'} !== null) ${'ref_document_srl25_argument'}->setColumnType('number');

$query->setColumns(array(
new SelectExpression('count(*)', '`count`')
));
$query->setTables(array(
new Table('`xe_referer_page_statistics`', '`referer_page_statistics`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`ref_mid`',$ref_mid24_argument,"equal")
,new ConditionWithArgument('`ref_document_srl`',$ref_document_srl25_argument,"equal", 'and')))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>