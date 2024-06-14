<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("insertTag");
$query->setAction("insert");
$query->setPriority("");

${'tag_srl6_argument'} = new Argument('tag_srl', $args->{'tag_srl'});
$db = DB::getInstance(); $sequence = $db->getNextSequence(); ${'tag_srl6_argument'}->ensureDefaultValue($sequence);
${'tag_srl6_argument'}->checkNotNull();
if(!${'tag_srl6_argument'}->isValid()) return ${'tag_srl6_argument'}->getErrorMessage();
if(${'tag_srl6_argument'} !== null) ${'tag_srl6_argument'}->setColumnType('number');

${'module_srl7_argument'} = new Argument('module_srl', $args->{'module_srl'});
${'module_srl7_argument'}->checkFilter('number');
${'module_srl7_argument'}->checkNotNull();
if(!${'module_srl7_argument'}->isValid()) return ${'module_srl7_argument'}->getErrorMessage();
if(${'module_srl7_argument'} !== null) ${'module_srl7_argument'}->setColumnType('number');

${'document_srl8_argument'} = new Argument('document_srl', $args->{'document_srl'});
${'document_srl8_argument'}->checkFilter('number');
${'document_srl8_argument'}->checkNotNull();
if(!${'document_srl8_argument'}->isValid()) return ${'document_srl8_argument'}->getErrorMessage();
if(${'document_srl8_argument'} !== null) ${'document_srl8_argument'}->setColumnType('number');

${'tag9_argument'} = new Argument('tag', $args->{'tag'});
${'tag9_argument'}->checkNotNull();
if(!${'tag9_argument'}->isValid()) return ${'tag9_argument'}->getErrorMessage();
if(${'tag9_argument'} !== null) ${'tag9_argument'}->setColumnType('varchar');

${'regdate10_argument'} = new Argument('regdate', $args->{'regdate'});
${'regdate10_argument'}->ensureDefaultValue(date("YmdHis"));
if(!${'regdate10_argument'}->isValid()) return ${'regdate10_argument'}->getErrorMessage();
if(${'regdate10_argument'} !== null) ${'regdate10_argument'}->setColumnType('date');

$query->setColumns(array(
new InsertExpression('`tag_srl`', ${'tag_srl6_argument'})
,new InsertExpression('`module_srl`', ${'module_srl7_argument'})
,new InsertExpression('`document_srl`', ${'document_srl8_argument'})
,new InsertExpression('`tag`', ${'tag9_argument'})
,new InsertExpression('`regdate`', ${'regdate10_argument'})
));
$query->setTables(array(
new Table('`xe_tags`', '`tags`')
));
$query->setConditions(array());
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>