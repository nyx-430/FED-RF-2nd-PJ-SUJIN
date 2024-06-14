<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("updatePageStatistics");
$query->setAction("update");
$query->setPriority("");

${'count17_argument'} = new Argument('count', $args->{'count'});
${'count17_argument'}->setColumnOperation('+');
${'count17_argument'}->ensureDefaultValue(1);
if(!${'count17_argument'}->isValid()) return ${'count17_argument'}->getErrorMessage();
if(${'count17_argument'} !== null) ${'count17_argument'}->setColumnType('number');
if(isset($args->ref_mid)) {
${'ref_mid18_argument'} = new ConditionArgument('ref_mid', $args->ref_mid, 'equal');
${'ref_mid18_argument'}->createConditionValue();
if(!${'ref_mid18_argument'}->isValid()) return ${'ref_mid18_argument'}->getErrorMessage();
} else
${'ref_mid18_argument'} = NULL;if(${'ref_mid18_argument'} !== null) ${'ref_mid18_argument'}->setColumnType('varchar');

${'ref_document_srl19_argument'} = new ConditionArgument('ref_document_srl', $args->ref_document_srl, 'equal');
${'ref_document_srl19_argument'}->ensureDefaultValue('-1');
${'ref_document_srl19_argument'}->checkNotNull();
${'ref_document_srl19_argument'}->createConditionValue();
if(!${'ref_document_srl19_argument'}->isValid()) return ${'ref_document_srl19_argument'}->getErrorMessage();
if(${'ref_document_srl19_argument'} !== null) ${'ref_document_srl19_argument'}->setColumnType('number');

$query->setColumns(array(
new UpdateExpression('`count`', ${'count17_argument'})
));
$query->setTables(array(
new Table('`xe_referer_page_statistics`', '`referer_page_statistics`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`ref_mid`',$ref_mid18_argument,"equal")
,new ConditionWithArgument('`ref_document_srl`',$ref_document_srl19_argument,"equal", 'and')))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>