<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("insertPageStatistics");
$query->setAction("insert");
$query->setPriority("");

${'ref_mid26_argument'} = new Argument('ref_mid', $args->{'ref_mid'});
${'ref_mid26_argument'}->checkNotNull();
if(!${'ref_mid26_argument'}->isValid()) return ${'ref_mid26_argument'}->getErrorMessage();
if(${'ref_mid26_argument'} !== null) ${'ref_mid26_argument'}->setColumnType('varchar');

${'ref_document_srl27_argument'} = new Argument('ref_document_srl', $args->{'ref_document_srl'});
${'ref_document_srl27_argument'}->ensureDefaultValue('-1');
${'ref_document_srl27_argument'}->checkNotNull();
if(!${'ref_document_srl27_argument'}->isValid()) return ${'ref_document_srl27_argument'}->getErrorMessage();
if(${'ref_document_srl27_argument'} !== null) ${'ref_document_srl27_argument'}->setColumnType('number');

${'count28_argument'} = new Argument('count', $args->{'count'});
${'count28_argument'}->ensureDefaultValue('1');
if(!${'count28_argument'}->isValid()) return ${'count28_argument'}->getErrorMessage();
if(${'count28_argument'} !== null) ${'count28_argument'}->setColumnType('number');

$query->setColumns(array(
new InsertExpression('`ref_mid`', ${'ref_mid26_argument'})
,new InsertExpression('`ref_document_srl`', ${'ref_document_srl27_argument'})
,new InsertExpression('`count`', ${'count28_argument'})
));
$query->setTables(array(
new Table('`xe_referer_page_statistics`', '`referer_page_statistics`')
));
$query->setConditions(array());
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>