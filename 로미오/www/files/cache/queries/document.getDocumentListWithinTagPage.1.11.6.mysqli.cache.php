<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("getDocumentListWithinTagPage");
$query->setAction("select");
$query->setPriority("");
if(isset($args->module_srl)) {
${'module_srl1_argument'} = new ConditionArgument('module_srl', $args->module_srl, 'in');
${'module_srl1_argument'}->checkFilter('number');
${'module_srl1_argument'}->createConditionValue();
if(!${'module_srl1_argument'}->isValid()) return ${'module_srl1_argument'}->getErrorMessage();
} else
${'module_srl1_argument'} = NULL;if(${'module_srl1_argument'} !== null) ${'module_srl1_argument'}->setColumnType('number');
if(isset($args->exclude_module_srl)) {
${'exclude_module_srl2_argument'} = new ConditionArgument('exclude_module_srl', $args->exclude_module_srl, 'notin');
${'exclude_module_srl2_argument'}->checkFilter('number');
${'exclude_module_srl2_argument'}->createConditionValue();
if(!${'exclude_module_srl2_argument'}->isValid()) return ${'exclude_module_srl2_argument'}->getErrorMessage();
} else
${'exclude_module_srl2_argument'} = NULL;if(${'exclude_module_srl2_argument'} !== null) ${'exclude_module_srl2_argument'}->setColumnType('number');
if(isset($args->category_srl)) {
${'category_srl3_argument'} = new ConditionArgument('category_srl', $args->category_srl, 'in');
${'category_srl3_argument'}->checkFilter('number');
${'category_srl3_argument'}->createConditionValue();
if(!${'category_srl3_argument'}->isValid()) return ${'category_srl3_argument'}->getErrorMessage();
} else
${'category_srl3_argument'} = NULL;if(${'category_srl3_argument'} !== null) ${'category_srl3_argument'}->setColumnType('number');
if(isset($args->member_srl)) {
${'member_srl4_argument'} = new ConditionArgument('member_srl', $args->member_srl, 'equal');
${'member_srl4_argument'}->checkFilter('number');
${'member_srl4_argument'}->createConditionValue();
if(!${'member_srl4_argument'}->isValid()) return ${'member_srl4_argument'}->getErrorMessage();
} else
${'member_srl4_argument'} = NULL;if(${'member_srl4_argument'} !== null) ${'member_srl4_argument'}->setColumnType('number');

${'s_tags5_argument'} = new ConditionArgument('s_tags', $args->s_tags, 'like');
${'s_tags5_argument'}->checkNotNull();
${'s_tags5_argument'}->createConditionValue();
if(!${'s_tags5_argument'}->isValid()) return ${'s_tags5_argument'}->getErrorMessage();
if(${'s_tags5_argument'} !== null) ${'s_tags5_argument'}->setColumnType('varchar');
if(isset($args->list_order)) {
${'list_order6_argument'} = new ConditionArgument('list_order', $args->list_order, 'less');
${'list_order6_argument'}->checkFilter('number');
${'list_order6_argument'}->createConditionValue();
if(!${'list_order6_argument'}->isValid()) return ${'list_order6_argument'}->getErrorMessage();
} else
${'list_order6_argument'} = NULL;if(${'list_order6_argument'} !== null) ${'list_order6_argument'}->setColumnType('number');
if(isset($args->rev_list_order)) {
${'rev_list_order7_argument'} = new ConditionArgument('rev_list_order', $args->rev_list_order, 'more');
${'rev_list_order7_argument'}->checkFilter('number');
${'rev_list_order7_argument'}->createConditionValue();
if(!${'rev_list_order7_argument'}->isValid()) return ${'rev_list_order7_argument'}->getErrorMessage();
} else
${'rev_list_order7_argument'} = NULL;if(${'rev_list_order7_argument'} !== null) ${'rev_list_order7_argument'}->setColumnType('number');
if(isset($args->update_order)) {
${'update_order8_argument'} = new ConditionArgument('update_order', $args->update_order, 'less');
${'update_order8_argument'}->checkFilter('number');
${'update_order8_argument'}->createConditionValue();
if(!${'update_order8_argument'}->isValid()) return ${'update_order8_argument'}->getErrorMessage();
} else
${'update_order8_argument'} = NULL;if(${'update_order8_argument'} !== null) ${'update_order8_argument'}->setColumnType('number');
if(isset($args->rev_update_order)) {
${'rev_update_order9_argument'} = new ConditionArgument('rev_update_order', $args->rev_update_order, 'more');
${'rev_update_order9_argument'}->checkFilter('number');
${'rev_update_order9_argument'}->createConditionValue();
if(!${'rev_update_order9_argument'}->isValid()) return ${'rev_update_order9_argument'}->getErrorMessage();
} else
${'rev_update_order9_argument'} = NULL;if(${'rev_update_order9_argument'} !== null) ${'rev_update_order9_argument'}->setColumnType('number');

$query->setColumns(array(
new SelectExpression('count(distinct `documents`.`document_srl`)', '`count`')
));
$query->setTables(array(
new Table('`xe_documents`', '`documents`')
,new Table('`xe_tags`', '`tags`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`documents`.`module_srl`',$module_srl1_argument,"in")
,new ConditionWithArgument('`documents`.`module_srl`',$exclude_module_srl2_argument,"notin", 'and')
,new ConditionWithoutArgument('`documents`.`document_srl`','`tags`.`document_srl`',"equal", 'and')
,new ConditionWithArgument('`documents`.`category_srl`',$category_srl3_argument,"in", 'and')
,new ConditionWithArgument('`documents`.`member_srl`',$member_srl4_argument,"equal", 'and')
,new ConditionWithArgument('`tags`.`tag`',$s_tags5_argument,"like", 'and')))
,new ConditionGroup(array(
new ConditionWithArgument('`documents`.`list_order`',$list_order6_argument,"less", 'and')
,new ConditionWithArgument('`documents`.`list_order`',$rev_list_order7_argument,"more", 'and')
,new ConditionWithArgument('`documents`.`update_order`',$update_order8_argument,"less", 'and')
,new ConditionWithArgument('`documents`.`update_order`',$rev_update_order9_argument,"more", 'and')),'and')
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>