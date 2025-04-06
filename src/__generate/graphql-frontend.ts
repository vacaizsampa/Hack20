import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _ByteArray: { input: any; output: any; }
  _Date: { input: any; output: any; }
  _DateTime: { input: any; output: any; }
  _Float4: { input: any; output: any; }
  _OffsetDateTime: { input: any; output: any; }
  _Time: { input: any; output: any; }
  /** An arbitrary precision signed decimal */
  BigDecimal: { input: any; output: any; }
  /** An 8-bit signed integer */
  Byte: { input: any; output: any; }
  /** A UTF-16 code unit; a character on Unicode's BMP */
  Char: { input: any; output: any; }
  /** A 64-bit signed integer */
  Long: { input: any; output: any; }
  /** A 16-bit signed integer */
  Short: { input: any; output: any; }
};

export type _Calculation = {
  __typename?: '_Calculation';
  bigDecimal?: Maybe<Scalars['BigDecimal']['output']>;
  boolean?: Maybe<Scalars['Boolean']['output']>;
  byte?: Maybe<Scalars['Byte']['output']>;
  byteArray?: Maybe<Scalars['_ByteArray']['output']>;
  char?: Maybe<Scalars['Char']['output']>;
  date?: Maybe<Scalars['_Date']['output']>;
  dateTime?: Maybe<Scalars['_DateTime']['output']>;
  double?: Maybe<Scalars['Float']['output']>;
  float?: Maybe<Scalars['_Float4']['output']>;
  int?: Maybe<Scalars['Int']['output']>;
  long?: Maybe<Scalars['Long']['output']>;
  offsetDateTime?: Maybe<Scalars['_OffsetDateTime']['output']>;
  short?: Maybe<Scalars['Short']['output']>;
  string?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['_Time']['output']>;
};


export type _CalculationBigDecimalArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationBooleanArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationByteArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationByteArrayArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationCharArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationDateArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationDateTimeArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationDoubleArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationFloatArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationIntArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationLongArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationOffsetDateTimeArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationShortArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationStringArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationTimeArgs = {
  expr: Scalars['String']['input'];
};

export type _CompareEventInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
};

export type _CompareOrganizationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type _ComparePersonInput = {
  birthDate?: InputMaybe<Scalars['_Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type _CompareVolonteerEventRequestInput = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type _CompareVolonteerInput = {
  nickName?: InputMaybe<Scalars['String']['input']>;
};

export type _CreateEventInput = {
  description: Scalars['String']['input'];
  endDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
  organization: Scalars['ID']['input'];
  startDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
  statusForX?: InputMaybe<_SysStatusFieldsInput>;
};

export type _CreateOrganizationInput = {
  name: Scalars['String']['input'];
};

export type _CreatePersonInput = {
  birthDate?: InputMaybe<Scalars['_Date']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type _CreateRootDictionaryInput = {
  id: Scalars['ID']['input'];
};

export type _CreateVolonteerEventRequestInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<_DoubleReferenceInput>;
  statusForX?: InputMaybe<_SysStatusFieldsInput>;
  volonteer: Scalars['ID']['input'];
};

export type _CreateVolonteerInput = {
  nickName?: InputMaybe<Scalars['String']['input']>;
  person: _SingleReferenceInput;
};

export type _DeleteManyEventInput = {
  compare?: InputMaybe<_CompareEventInput>;
  id: Scalars['String']['input'];
};

export type _DeleteManyOrganizationInput = {
  compare?: InputMaybe<_CompareOrganizationInput>;
  id: Scalars['String']['input'];
};

export type _DeleteManyPersonInput = {
  compare?: InputMaybe<_ComparePersonInput>;
  id: Scalars['String']['input'];
};

export type _DeleteManyRootDictionaryInput = {
  id: Scalars['String']['input'];
};

export type _DeleteManyVolonteerEventRequestInput = {
  compare?: InputMaybe<_CompareVolonteerEventRequestInput>;
  id: Scalars['String']['input'];
};

export type _DeleteManyVolonteerInput = {
  compare?: InputMaybe<_CompareVolonteerInput>;
  id: Scalars['String']['input'];
};

export enum _DependsOnDependencyByGet {
  Exists = 'EXISTS',
  NotExists = 'NOT_EXISTS'
}

export enum _DependsOnDependencyByUpdateOrCreate {
  Created = 'CREATED',
  NotCreated = 'NOT_CREATED'
}

export type _DictionaryPacket = {
  __typename?: '_DictionaryPacket';
  deleteManyRootDictionary?: Maybe<Scalars['String']['output']>;
  deleteRootDictionary?: Maybe<Scalars['String']['output']>;
  getRootDictionary?: Maybe<RootDictionary>;
};


export type _DictionaryPacketDeleteManyRootDictionaryArgs = {
  input: Array<_DeleteManyRootDictionaryInput>;
};


export type _DictionaryPacketDeleteRootDictionaryArgs = {
  id: Scalars['ID']['input'];
};


export type _DictionaryPacketGetRootDictionaryArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};

export type _DoubleReferenceInput = {
  entityId: Scalars['String']['input'];
  rootEntityId?: InputMaybe<Scalars['String']['input']>;
};

export type _E_Event = _Entity & Event & {
  __typename?: '_E_Event';
  _calc: _Calculation;
  aggregateRoot?: Maybe<Organization>;
  description: Scalars['String']['output'];
  endDateTime?: Maybe<Scalars['_DateTime']['output']>;
  id: Scalars['ID']['output'];
  organization: Organization;
  startDateTime?: Maybe<Scalars['_DateTime']['output']>;
  statusForX: _G_SysStatusFields;
  type: Scalars['String']['output'];
};


export type _E_EventAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_EventOrganizationArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_Organization = _Entity & Organization & {
  __typename?: '_E_Organization';
  _calc: _Calculation;
  eventList: _Ec_Event;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};


export type _E_OrganizationEventListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_Person = _Entity & Person & {
  __typename?: '_E_Person';
  _calc: _Calculation;
  birthDate?: Maybe<Scalars['_Date']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};

export type _E_RootDictionary = _Entity & RootDictionary & {
  __typename?: '_E_RootDictionary';
  _calc: _Calculation;
  id: Scalars['ID']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};

export type _E_Volonteer = _Entity & Volonteer & {
  __typename?: '_E_Volonteer';
  _calc: _Calculation;
  eventBookingList: _Ec_VolonteerEventRequest;
  id: Scalars['ID']['output'];
  nickName?: Maybe<Scalars['String']['output']>;
  person: _G_PersonReference;
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};


export type _E_VolonteerEventBookingListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_VolonteerEventRequest = _Entity & VolonteerEventRequest & {
  __typename?: '_E_VolonteerEventRequest';
  _calc: _Calculation;
  aggregateRoot?: Maybe<Volonteer>;
  description?: Maybe<Scalars['String']['output']>;
  event: _G_EventReference;
  id: Scalars['ID']['output'];
  statusForX: _G_SysStatusFields;
  type: Scalars['String']['output'];
  volonteer: Volonteer;
};


export type _E_VolonteerEventRequestAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_VolonteerEventRequestVolonteerArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _Ec_Event = {
  __typename?: '_EC_Event';
  count: Scalars['Int']['output'];
  elems: Array<Event>;
};

export type _Ec_Organization = {
  __typename?: '_EC_Organization';
  count: Scalars['Int']['output'];
  elems: Array<Organization>;
};

export type _Ec_Person = {
  __typename?: '_EC_Person';
  count: Scalars['Int']['output'];
  elems: Array<Person>;
};

export type _Ec_RootDictionary = {
  __typename?: '_EC_RootDictionary';
  count: Scalars['Int']['output'];
  elems: Array<RootDictionary>;
};

export type _Ec_Volonteer = {
  __typename?: '_EC_Volonteer';
  count: Scalars['Int']['output'];
  elems: Array<Volonteer>;
};

export type _Ec_VolonteerEventRequest = {
  __typename?: '_EC_VolonteerEventRequest';
  count: Scalars['Int']['output'];
  elems: Array<VolonteerEventRequest>;
};

export type _Entity = {
  id: Scalars['ID']['output'];
};

export type _G_EventReference = {
  __typename?: '_G_EventReference';
  entity?: Maybe<Event>;
  entityId?: Maybe<Scalars['String']['output']>;
  rootEntityId?: Maybe<Scalars['String']['output']>;
};


export type _G_EventReferenceEntityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _G_PersonReference = {
  __typename?: '_G_PersonReference';
  entity?: Maybe<Person>;
  entityId?: Maybe<Scalars['String']['output']>;
};


export type _G_PersonReferenceEntityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _G_SysStatusFields = {
  __typename?: '_G_SysStatusFields';
  code?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
};

export enum _GetLockMode {
  NotUse = 'NOT_USE',
  Nowait = 'NOWAIT',
  Wait = 'WAIT'
}

export type _IncBigDecimalValue = {
  fail?: InputMaybe<_IncBigDecimalValueFail>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['BigDecimal']['input'];
};

export type _IncBigDecimalValueFail = {
  operation: _IncFailOperator;
  value: Scalars['BigDecimal']['input'];
};

export type _IncDoubleValue = {
  fail?: InputMaybe<_IncDoubleValueFail>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['Float']['input'];
};

export type _IncDoubleValueFail = {
  operation: _IncFailOperator;
  value: Scalars['Float']['input'];
};

export enum _IncFailOperator {
  Ge = 'ge',
  Gt = 'gt',
  Le = 'le',
  Lt = 'lt'
}

export type _IncFloatValue = {
  fail?: InputMaybe<_IncFloatValueFail>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['_Float4']['input'];
};

export type _IncFloatValueFail = {
  operation: _IncFailOperator;
  value: Scalars['_Float4']['input'];
};

export type _IncIntValue = {
  fail?: InputMaybe<_IncIntValueFail>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['Int']['input'];
};

export type _IncIntValueFail = {
  operation: _IncFailOperator;
  value: Scalars['Int']['input'];
};

export type _IncLongValue = {
  fail?: InputMaybe<_IncLongValueFail>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['Long']['input'];
};

export type _IncLongValueFail = {
  operation: _IncFailOperator;
  value: Scalars['Long']['input'];
};

export type _MergedEntitiesCollection = {
  __typename?: '_MergedEntitiesCollection';
  count: Scalars['Int']['output'];
  elems: Array<_Entity>;
};

export type _Mutation = {
  __typename?: '_Mutation';
  dictionaryPacket?: Maybe<_DictionaryPacket>;
  packet?: Maybe<_Packet>;
};


export type _MutationPacketArgs = {
  aggregateVersion?: InputMaybe<Scalars['Long']['input']>;
  idempotencePacketId?: InputMaybe<Scalars['String']['input']>;
};

export type _Packet = {
  __typename?: '_Packet';
  aggregateVersion?: Maybe<Scalars['Long']['output']>;
  createEvent?: Maybe<Event>;
  createManyEvent?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyOrganization?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyPerson?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyVolonteer?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyVolonteerEventRequest?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createOrganization?: Maybe<Organization>;
  createPerson?: Maybe<Person>;
  createVolonteer?: Maybe<Volonteer>;
  createVolonteerEventRequest?: Maybe<VolonteerEventRequest>;
  deleteEvent?: Maybe<Scalars['String']['output']>;
  deleteManyEvent?: Maybe<Scalars['String']['output']>;
  deleteManyOrganization?: Maybe<Scalars['String']['output']>;
  deleteManyPerson?: Maybe<Scalars['String']['output']>;
  deleteManyVolonteer?: Maybe<Scalars['String']['output']>;
  deleteManyVolonteerEventRequest?: Maybe<Scalars['String']['output']>;
  deleteOrganization?: Maybe<Scalars['String']['output']>;
  deletePerson?: Maybe<Scalars['String']['output']>;
  deleteVolonteer?: Maybe<Scalars['String']['output']>;
  deleteVolonteerEventRequest?: Maybe<Scalars['String']['output']>;
  getEvent?: Maybe<Event>;
  getOrganization?: Maybe<Organization>;
  getPerson?: Maybe<Person>;
  getRootDictionary?: Maybe<RootDictionary>;
  getVolonteer?: Maybe<Volonteer>;
  getVolonteerEventRequest?: Maybe<VolonteerEventRequest>;
  isIdempotenceResponse?: Maybe<Scalars['Boolean']['output']>;
  updateEvent?: Maybe<Event>;
  updateManyEvent: Scalars['String']['output'];
  updateManyOrganization: Scalars['String']['output'];
  updateManyPerson: Scalars['String']['output'];
  updateManyVolonteer: Scalars['String']['output'];
  updateManyVolonteerEventRequest: Scalars['String']['output'];
  updateOrganization?: Maybe<Organization>;
  updatePerson?: Maybe<Person>;
  updateVolonteer?: Maybe<Volonteer>;
  updateVolonteerEventRequest?: Maybe<VolonteerEventRequest>;
};


export type _PacketCreateEventArgs = {
  input: _CreateEventInput;
};


export type _PacketCreateManyEventArgs = {
  input: Array<_CreateEventInput>;
};


export type _PacketCreateManyOrganizationArgs = {
  input: Array<_CreateOrganizationInput>;
};


export type _PacketCreateManyPersonArgs = {
  input: Array<_CreatePersonInput>;
};


export type _PacketCreateManyVolonteerArgs = {
  input: Array<_CreateVolonteerInput>;
};


export type _PacketCreateManyVolonteerEventRequestArgs = {
  input: Array<_CreateVolonteerEventRequestInput>;
};


export type _PacketCreateOrganizationArgs = {
  input: _CreateOrganizationInput;
};


export type _PacketCreatePersonArgs = {
  input: _CreatePersonInput;
};


export type _PacketCreateVolonteerArgs = {
  input: _CreateVolonteerInput;
};


export type _PacketCreateVolonteerEventRequestArgs = {
  input: _CreateVolonteerEventRequestInput;
};


export type _PacketDeleteEventArgs = {
  compare?: InputMaybe<_CompareEventInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteManyEventArgs = {
  input: Array<_DeleteManyEventInput>;
};


export type _PacketDeleteManyOrganizationArgs = {
  input: Array<_DeleteManyOrganizationInput>;
};


export type _PacketDeleteManyPersonArgs = {
  input: Array<_DeleteManyPersonInput>;
};


export type _PacketDeleteManyVolonteerArgs = {
  input: Array<_DeleteManyVolonteerInput>;
};


export type _PacketDeleteManyVolonteerEventRequestArgs = {
  input: Array<_DeleteManyVolonteerEventRequestInput>;
};


export type _PacketDeleteOrganizationArgs = {
  compare?: InputMaybe<_CompareOrganizationInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeletePersonArgs = {
  compare?: InputMaybe<_ComparePersonInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteVolonteerArgs = {
  compare?: InputMaybe<_CompareVolonteerInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteVolonteerEventRequestArgs = {
  compare?: InputMaybe<_CompareVolonteerEventRequestInput>;
  id: Scalars['ID']['input'];
};


export type _PacketGetEventArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketGetOrganizationArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketGetPersonArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketGetRootDictionaryArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketGetVolonteerArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketGetVolonteerEventRequestArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketUpdateEventArgs = {
  compare?: InputMaybe<_CompareEventInput>;
  input: _UpdateEventInput;
};


export type _PacketUpdateManyEventArgs = {
  input: Array<_UpdateManyEventInput>;
};


export type _PacketUpdateManyOrganizationArgs = {
  input: Array<_UpdateManyOrganizationInput>;
};


export type _PacketUpdateManyPersonArgs = {
  input: Array<_UpdateManyPersonInput>;
};


export type _PacketUpdateManyVolonteerArgs = {
  input: Array<_UpdateManyVolonteerInput>;
};


export type _PacketUpdateManyVolonteerEventRequestArgs = {
  input: Array<_UpdateManyVolonteerEventRequestInput>;
};


export type _PacketUpdateOrganizationArgs = {
  compare?: InputMaybe<_CompareOrganizationInput>;
  input: _UpdateOrganizationInput;
};


export type _PacketUpdatePersonArgs = {
  compare?: InputMaybe<_ComparePersonInput>;
  input: _UpdatePersonInput;
};


export type _PacketUpdateVolonteerArgs = {
  compare?: InputMaybe<_CompareVolonteerInput>;
  input: _UpdateVolonteerInput;
};


export type _PacketUpdateVolonteerEventRequestArgs = {
  compare?: InputMaybe<_CompareVolonteerEventRequestInput>;
  input: _UpdateVolonteerEventRequestInput;
};

export type _Query = {
  __typename?: '_Query';
  merge: _MergedEntitiesCollection;
  resolveReferences: Array<_Reference>;
  searchEvent: _Ec_Event;
  searchOrganization: _Ec_Organization;
  searchPerson: _Ec_Person;
  searchRootDictionary: _Ec_RootDictionary;
  searchVolonteer: _Ec_Volonteer;
  searchVolonteerEventRequest: _Ec_VolonteerEventRequest;
  strExpr?: Maybe<Scalars['String']['output']>;
};


export type _QueryMergeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QueryResolveReferencesArgs = {
  ids: Array<Scalars['ID']['input']>;
  referenceType: Scalars['String']['input'];
};


export type _QuerySearchEventArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchOrganizationArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchPersonArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchRootDictionaryArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchVolonteerArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchVolonteerEventRequestArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QueryStrExprArgs = {
  bigDecimals?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  booleans?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  bytes?: InputMaybe<Array<Scalars['Byte']['input']>>;
  chars?: InputMaybe<Array<Scalars['Char']['input']>>;
  dates?: InputMaybe<Array<Scalars['_Date']['input']>>;
  dateTimes?: InputMaybe<Array<Scalars['_DateTime']['input']>>;
  doubles?: InputMaybe<Array<Scalars['Float']['input']>>;
  floats?: InputMaybe<Array<Scalars['_Float4']['input']>>;
  ints?: InputMaybe<Array<Scalars['Int']['input']>>;
  longs?: InputMaybe<Array<Scalars['Long']['input']>>;
  offsetDateTimes?: InputMaybe<Array<Scalars['_OffsetDateTime']['input']>>;
  shorts?: InputMaybe<Array<Scalars['Short']['input']>>;
  strings?: InputMaybe<Array<Scalars['String']['input']>>;
  times?: InputMaybe<Array<Scalars['_Time']['input']>>;
};

export type _R_Event = _Reference & {
  __typename?: '_R_Event';
  entity?: Maybe<Event>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Organization = _Reference & {
  __typename?: '_R_Organization';
  entity?: Maybe<Organization>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Person = _Reference & {
  __typename?: '_R_Person';
  entity?: Maybe<Person>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_RootDictionary = _Reference & {
  __typename?: '_R_RootDictionary';
  entity?: Maybe<RootDictionary>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Volonteer = _Reference & {
  __typename?: '_R_Volonteer';
  entity?: Maybe<Volonteer>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_VolonteerEventRequest = _Reference & {
  __typename?: '_R_VolonteerEventRequest';
  entity?: Maybe<VolonteerEventRequest>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _Reference = {
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _SingleReferenceInput = {
  entityId: Scalars['String']['input'];
};

export type _SortCriterionSpecification = {
  crit: Scalars['String']['input'];
  nullsLast?: InputMaybe<Scalars['Boolean']['input']>;
  order?: _SortOrder;
};

export enum _SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type _SysStatusFieldsInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type _UpdateEventInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
  id: Scalars['ID']['input'];
  organization?: InputMaybe<Scalars['ID']['input']>;
  startDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
  statusForX?: InputMaybe<_SysStatusFieldsInput>;
};

export type _UpdateManyEventInput = {
  compare?: InputMaybe<_CompareEventInput>;
  param?: InputMaybe<_UpdateEventInput>;
};

export type _UpdateManyOrganizationInput = {
  compare?: InputMaybe<_CompareOrganizationInput>;
  param?: InputMaybe<_UpdateOrganizationInput>;
};

export type _UpdateManyPersonInput = {
  compare?: InputMaybe<_ComparePersonInput>;
  param?: InputMaybe<_UpdatePersonInput>;
};

export type _UpdateManyVolonteerEventRequestInput = {
  compare?: InputMaybe<_CompareVolonteerEventRequestInput>;
  param?: InputMaybe<_UpdateVolonteerEventRequestInput>;
};

export type _UpdateManyVolonteerInput = {
  compare?: InputMaybe<_CompareVolonteerInput>;
  param?: InputMaybe<_UpdateVolonteerInput>;
};

export type _UpdateOrganizationInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type _UpdatePersonInput = {
  birthDate?: InputMaybe<Scalars['_Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type _UpdateVolonteerEventRequestInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<_DoubleReferenceInput>;
  id: Scalars['ID']['input'];
  statusForX?: InputMaybe<_SysStatusFieldsInput>;
  volonteer?: InputMaybe<Scalars['ID']['input']>;
};

export type _UpdateVolonteerInput = {
  id: Scalars['ID']['input'];
  nickName?: InputMaybe<Scalars['String']['input']>;
  person?: InputMaybe<_SingleReferenceInput>;
};

export type Event = {
  _calc: _Calculation;
  aggregateRoot?: Maybe<Organization>;
  description: Scalars['String']['output'];
  endDateTime?: Maybe<Scalars['_DateTime']['output']>;
  id: Scalars['ID']['output'];
  organization: Organization;
  startDateTime?: Maybe<Scalars['_DateTime']['output']>;
  statusForX: _G_SysStatusFields;
  type: Scalars['String']['output'];
};


export type EventAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type EventOrganizationArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type Organization = {
  _calc: _Calculation;
  eventList: _Ec_Event;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};


export type OrganizationEventListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type Person = {
  _calc: _Calculation;
  birthDate?: Maybe<Scalars['_Date']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};

export type RootDictionary = {
  _calc: _Calculation;
  id: Scalars['ID']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};

export type Volonteer = {
  _calc: _Calculation;
  eventBookingList: _Ec_VolonteerEventRequest;
  id: Scalars['ID']['output'];
  nickName?: Maybe<Scalars['String']['output']>;
  person: _G_PersonReference;
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};


export type VolonteerEventBookingListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type VolonteerEventRequest = {
  _calc: _Calculation;
  aggregateRoot?: Maybe<Volonteer>;
  description?: Maybe<Scalars['String']['output']>;
  event: _G_EventReference;
  id: Scalars['ID']['output'];
  statusForX: _G_SysStatusFields;
  type: Scalars['String']['output'];
  volonteer: Volonteer;
};


export type VolonteerEventRequestAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type VolonteerEventRequestVolonteerArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type EventAttributesFragment = { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } };

export type SearchEventQueryVariables = Exact<{
  cond?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchEventQuery = { __typename?: '_Query', searchEvent: { __typename?: '_EC_Event', elems: Array<{ __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } }> } };

export type GetForUpdateEventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetForUpdateEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getEvent?: { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } } | null } | null };

export type CreateEventMutationVariables = Exact<{
  input: _CreateEventInput;
}>;


export type CreateEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createEvent?: { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } } | null } | null };

export type UpdateEventMutationVariables = Exact<{
  input: _UpdateEventInput;
}>;


export type UpdateEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateEvent?: { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } } | null } | null };

export type DeleteEventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteEvent?: string | null } | null };

export type OrganizationAttributesFragment = { __typename: '_E_Organization', id: string, name: string };

export type SearchOrganizationQueryVariables = Exact<{
  cond?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchOrganizationQuery = { __typename?: '_Query', searchOrganization: { __typename?: '_EC_Organization', elems: Array<{ __typename: '_E_Organization', id: string, name: string }> } };

export type GetForUpdateOrganizationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetForUpdateOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getOrganization?: { __typename: '_E_Organization', id: string, name: string } | null } | null };

export type CreateOrganizationMutationVariables = Exact<{
  input: _CreateOrganizationInput;
}>;


export type CreateOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createOrganization?: { __typename: '_E_Organization', id: string, name: string } | null } | null };

export type UpdateOrganizationMutationVariables = Exact<{
  input: _UpdateOrganizationInput;
}>;


export type UpdateOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateOrganization?: { __typename: '_E_Organization', id: string, name: string } | null } | null };

export type DeleteOrganizationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteOrganization?: string | null } | null };

export type PersonAttributesFragment = { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string };

export type SearchPersonQueryVariables = Exact<{
  cond?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchPersonQuery = { __typename?: '_Query', searchPerson: { __typename?: '_EC_Person', elems: Array<{ __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string }> } };

export type GetForUpdatePersonMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetForUpdatePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getPerson?: { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string } | null } | null };

export type CreatePersonMutationVariables = Exact<{
  input: _CreatePersonInput;
}>;


export type CreatePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createPerson?: { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string } | null } | null };

export type UpdatePersonMutationVariables = Exact<{
  input: _UpdatePersonInput;
}>;


export type UpdatePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updatePerson?: { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string } | null } | null };

export type DeletePersonMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deletePerson?: string | null } | null };

export type VolonteerAttributesFragment = { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } };

export type SearchVolonteerQueryVariables = Exact<{
  cond?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchVolonteerQuery = { __typename?: '_Query', searchVolonteer: { __typename?: '_EC_Volonteer', elems: Array<{ __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } }> } };

export type GetForUpdateVolonteerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetForUpdateVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getVolonteer?: { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } } | null } | null };

export type CreateVolonteerMutationVariables = Exact<{
  input: _CreateVolonteerInput;
}>;


export type CreateVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createVolonteer?: { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } } | null } | null };

export type UpdateVolonteerMutationVariables = Exact<{
  input: _UpdateVolonteerInput;
}>;


export type UpdateVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateVolonteer?: { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } } | null } | null };

export type DeleteVolonteerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteVolonteer?: string | null } | null };

export type VolonteerEventRequestAttributesFragment = { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } };

export type SearchVolonteerEventRequestQueryVariables = Exact<{
  cond?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchVolonteerEventRequestQuery = { __typename?: '_Query', searchVolonteerEventRequest: { __typename?: '_EC_VolonteerEventRequest', elems: Array<{ __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } }> } };

export type GetForUpdateVolonteerEventRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetForUpdateVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getVolonteerEventRequest?: { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } } | null } | null };

export type CreateVolonteerEventRequestMutationVariables = Exact<{
  input: _CreateVolonteerEventRequestInput;
}>;


export type CreateVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createVolonteerEventRequest?: { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } } | null } | null };

export type UpdateVolonteerEventRequestMutationVariables = Exact<{
  input: _UpdateVolonteerEventRequestInput;
}>;


export type UpdateVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateVolonteerEventRequest?: { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } } | null } | null };

export type DeleteVolonteerEventRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteVolonteerEventRequest?: string | null } | null };

export const EventAttributesFragmentDoc = gql`
    fragment EventAttributes on _E_Event {
  id
  __typename
  aggregateRoot {
    id
  }
  description
  endDateTime
  organization {
    id
  }
  startDateTime
  statusForX {
    code
    reason
  }
}
    `;
export const OrganizationAttributesFragmentDoc = gql`
    fragment OrganizationAttributes on _E_Organization {
  id
  __typename
  name
}
    `;
export const PersonAttributesFragmentDoc = gql`
    fragment PersonAttributes on _E_Person {
  id
  __typename
  birthDate
  firstName
  lastName
}
    `;
export const VolonteerAttributesFragmentDoc = gql`
    fragment VolonteerAttributes on _E_Volonteer {
  id
  __typename
  nickName
  person {
    entityId
  }
}
    `;
export const VolonteerEventRequestAttributesFragmentDoc = gql`
    fragment VolonteerEventRequestAttributes on _E_VolonteerEventRequest {
  id
  __typename
  aggregateRoot {
    id
  }
  description
  event {
    entityId
  }
  statusForX {
    code
    reason
  }
  volonteer {
    id
  }
}
    `;
export const SearchEventDocument = gql`
    query searchEvent($cond: String) {
  searchEvent(cond: $cond) {
    elems {
      ...EventAttributes
    }
  }
}
    ${EventAttributesFragmentDoc}`;

/**
 * __useSearchEventQuery__
 *
 * To run a query within a React component, call `useSearchEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchEventQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchEventQuery(baseOptions?: Apollo.QueryHookOptions<SearchEventQuery, SearchEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchEventQuery, SearchEventQueryVariables>(SearchEventDocument, options);
      }
export function useSearchEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchEventQuery, SearchEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchEventQuery, SearchEventQueryVariables>(SearchEventDocument, options);
        }
export function useSearchEventSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchEventQuery, SearchEventQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchEventQuery, SearchEventQueryVariables>(SearchEventDocument, options);
        }
export type SearchEventQueryHookResult = ReturnType<typeof useSearchEventQuery>;
export type SearchEventLazyQueryHookResult = ReturnType<typeof useSearchEventLazyQuery>;
export type SearchEventSuspenseQueryHookResult = ReturnType<typeof useSearchEventSuspenseQuery>;
export type SearchEventQueryResult = Apollo.QueryResult<SearchEventQuery, SearchEventQueryVariables>;
export const GetForUpdateEventDocument = gql`
    mutation getForUpdateEvent($id: ID!) {
  packet {
    getEvent(id: $id) {
      ...EventAttributes
    }
  }
}
    ${EventAttributesFragmentDoc}`;
export type GetForUpdateEventMutationFn = Apollo.MutationFunction<GetForUpdateEventMutation, GetForUpdateEventMutationVariables>;

/**
 * __useGetForUpdateEventMutation__
 *
 * To run a mutation, you first call `useGetForUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetForUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getForUpdateEventMutation, { data, loading, error }] = useGetForUpdateEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<GetForUpdateEventMutation, GetForUpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetForUpdateEventMutation, GetForUpdateEventMutationVariables>(GetForUpdateEventDocument, options);
      }
export type GetForUpdateEventMutationHookResult = ReturnType<typeof useGetForUpdateEventMutation>;
export type GetForUpdateEventMutationResult = Apollo.MutationResult<GetForUpdateEventMutation>;
export type GetForUpdateEventMutationOptions = Apollo.BaseMutationOptions<GetForUpdateEventMutation, GetForUpdateEventMutationVariables>;
export const CreateEventDocument = gql`
    mutation createEvent($input: _CreateEventInput!) {
  packet {
    createEvent(input: $input) {
      ...EventAttributes
    }
  }
}
    ${EventAttributesFragmentDoc}`;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation updateEvent($input: _UpdateEventInput!) {
  packet {
    updateEvent(input: $input) {
      ...EventAttributes
    }
  }
}
    ${EventAttributesFragmentDoc}`;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation deleteEvent($id: ID!) {
  packet {
    deleteEvent(id: $id)
  }
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const SearchOrganizationDocument = gql`
    query searchOrganization($cond: String) {
  searchOrganization(cond: $cond) {
    elems {
      ...OrganizationAttributes
    }
  }
}
    ${OrganizationAttributesFragmentDoc}`;

/**
 * __useSearchOrganizationQuery__
 *
 * To run a query within a React component, call `useSearchOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchOrganizationQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchOrganizationQuery(baseOptions?: Apollo.QueryHookOptions<SearchOrganizationQuery, SearchOrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchOrganizationQuery, SearchOrganizationQueryVariables>(SearchOrganizationDocument, options);
      }
export function useSearchOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchOrganizationQuery, SearchOrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchOrganizationQuery, SearchOrganizationQueryVariables>(SearchOrganizationDocument, options);
        }
export function useSearchOrganizationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchOrganizationQuery, SearchOrganizationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchOrganizationQuery, SearchOrganizationQueryVariables>(SearchOrganizationDocument, options);
        }
export type SearchOrganizationQueryHookResult = ReturnType<typeof useSearchOrganizationQuery>;
export type SearchOrganizationLazyQueryHookResult = ReturnType<typeof useSearchOrganizationLazyQuery>;
export type SearchOrganizationSuspenseQueryHookResult = ReturnType<typeof useSearchOrganizationSuspenseQuery>;
export type SearchOrganizationQueryResult = Apollo.QueryResult<SearchOrganizationQuery, SearchOrganizationQueryVariables>;
export const GetForUpdateOrganizationDocument = gql`
    mutation getForUpdateOrganization($id: ID!) {
  packet {
    getOrganization(id: $id) {
      ...OrganizationAttributes
    }
  }
}
    ${OrganizationAttributesFragmentDoc}`;
export type GetForUpdateOrganizationMutationFn = Apollo.MutationFunction<GetForUpdateOrganizationMutation, GetForUpdateOrganizationMutationVariables>;

/**
 * __useGetForUpdateOrganizationMutation__
 *
 * To run a mutation, you first call `useGetForUpdateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetForUpdateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getForUpdateOrganizationMutation, { data, loading, error }] = useGetForUpdateOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForUpdateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<GetForUpdateOrganizationMutation, GetForUpdateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetForUpdateOrganizationMutation, GetForUpdateOrganizationMutationVariables>(GetForUpdateOrganizationDocument, options);
      }
export type GetForUpdateOrganizationMutationHookResult = ReturnType<typeof useGetForUpdateOrganizationMutation>;
export type GetForUpdateOrganizationMutationResult = Apollo.MutationResult<GetForUpdateOrganizationMutation>;
export type GetForUpdateOrganizationMutationOptions = Apollo.BaseMutationOptions<GetForUpdateOrganizationMutation, GetForUpdateOrganizationMutationVariables>;
export const CreateOrganizationDocument = gql`
    mutation createOrganization($input: _CreateOrganizationInput!) {
  packet {
    createOrganization(input: $input) {
      ...OrganizationAttributes
    }
  }
}
    ${OrganizationAttributesFragmentDoc}`;
export type CreateOrganizationMutationFn = Apollo.MutationFunction<CreateOrganizationMutation, CreateOrganizationMutationVariables>;

/**
 * __useCreateOrganizationMutation__
 *
 * To run a mutation, you first call `useCreateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganizationMutation, { data, loading, error }] = useCreateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, options);
      }
export type CreateOrganizationMutationHookResult = ReturnType<typeof useCreateOrganizationMutation>;
export type CreateOrganizationMutationResult = Apollo.MutationResult<CreateOrganizationMutation>;
export type CreateOrganizationMutationOptions = Apollo.BaseMutationOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const UpdateOrganizationDocument = gql`
    mutation updateOrganization($input: _UpdateOrganizationInput!) {
  packet {
    updateOrganization(input: $input) {
      ...OrganizationAttributes
    }
  }
}
    ${OrganizationAttributesFragmentDoc}`;
export type UpdateOrganizationMutationFn = Apollo.MutationFunction<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;

/**
 * __useUpdateOrganizationMutation__
 *
 * To run a mutation, you first call `useUpdateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrganizationMutation, { data, loading, error }] = useUpdateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>(UpdateOrganizationDocument, options);
      }
export type UpdateOrganizationMutationHookResult = ReturnType<typeof useUpdateOrganizationMutation>;
export type UpdateOrganizationMutationResult = Apollo.MutationResult<UpdateOrganizationMutation>;
export type UpdateOrganizationMutationOptions = Apollo.BaseMutationOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;
export const DeleteOrganizationDocument = gql`
    mutation deleteOrganization($id: ID!) {
  packet {
    deleteOrganization(id: $id)
  }
}
    `;
export type DeleteOrganizationMutationFn = Apollo.MutationFunction<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;

/**
 * __useDeleteOrganizationMutation__
 *
 * To run a mutation, you first call `useDeleteOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrganizationMutation, { data, loading, error }] = useDeleteOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>(DeleteOrganizationDocument, options);
      }
export type DeleteOrganizationMutationHookResult = ReturnType<typeof useDeleteOrganizationMutation>;
export type DeleteOrganizationMutationResult = Apollo.MutationResult<DeleteOrganizationMutation>;
export type DeleteOrganizationMutationOptions = Apollo.BaseMutationOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;
export const SearchPersonDocument = gql`
    query searchPerson($cond: String) {
  searchPerson(cond: $cond) {
    elems {
      ...PersonAttributes
    }
  }
}
    ${PersonAttributesFragmentDoc}`;

/**
 * __useSearchPersonQuery__
 *
 * To run a query within a React component, call `useSearchPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPersonQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchPersonQuery(baseOptions?: Apollo.QueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
      }
export function useSearchPersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
        }
export function useSearchPersonSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
        }
export type SearchPersonQueryHookResult = ReturnType<typeof useSearchPersonQuery>;
export type SearchPersonLazyQueryHookResult = ReturnType<typeof useSearchPersonLazyQuery>;
export type SearchPersonSuspenseQueryHookResult = ReturnType<typeof useSearchPersonSuspenseQuery>;
export type SearchPersonQueryResult = Apollo.QueryResult<SearchPersonQuery, SearchPersonQueryVariables>;
export const GetForUpdatePersonDocument = gql`
    mutation getForUpdatePerson($id: ID!) {
  packet {
    getPerson(id: $id) {
      ...PersonAttributes
    }
  }
}
    ${PersonAttributesFragmentDoc}`;
export type GetForUpdatePersonMutationFn = Apollo.MutationFunction<GetForUpdatePersonMutation, GetForUpdatePersonMutationVariables>;

/**
 * __useGetForUpdatePersonMutation__
 *
 * To run a mutation, you first call `useGetForUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetForUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getForUpdatePersonMutation, { data, loading, error }] = useGetForUpdatePersonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForUpdatePersonMutation(baseOptions?: Apollo.MutationHookOptions<GetForUpdatePersonMutation, GetForUpdatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetForUpdatePersonMutation, GetForUpdatePersonMutationVariables>(GetForUpdatePersonDocument, options);
      }
export type GetForUpdatePersonMutationHookResult = ReturnType<typeof useGetForUpdatePersonMutation>;
export type GetForUpdatePersonMutationResult = Apollo.MutationResult<GetForUpdatePersonMutation>;
export type GetForUpdatePersonMutationOptions = Apollo.BaseMutationOptions<GetForUpdatePersonMutation, GetForUpdatePersonMutationVariables>;
export const CreatePersonDocument = gql`
    mutation createPerson($input: _CreatePersonInput!) {
  packet {
    createPerson(input: $input) {
      ...PersonAttributes
    }
  }
}
    ${PersonAttributesFragmentDoc}`;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePersonMutation(baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
      }
export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;
export const UpdatePersonDocument = gql`
    mutation updatePerson($input: _UpdatePersonInput!) {
  packet {
    updatePerson(input: $input) {
      ...PersonAttributes
    }
  }
}
    ${PersonAttributesFragmentDoc}`;
export type UpdatePersonMutationFn = Apollo.MutationFunction<UpdatePersonMutation, UpdatePersonMutationVariables>;

/**
 * __useUpdatePersonMutation__
 *
 * To run a mutation, you first call `useUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonMutation, { data, loading, error }] = useUpdatePersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePersonMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePersonMutation, UpdatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, options);
      }
export type UpdatePersonMutationHookResult = ReturnType<typeof useUpdatePersonMutation>;
export type UpdatePersonMutationResult = Apollo.MutationResult<UpdatePersonMutation>;
export type UpdatePersonMutationOptions = Apollo.BaseMutationOptions<UpdatePersonMutation, UpdatePersonMutationVariables>;
export const DeletePersonDocument = gql`
    mutation deletePerson($id: ID!) {
  packet {
    deletePerson(id: $id)
  }
}
    `;
export type DeletePersonMutationFn = Apollo.MutationFunction<DeletePersonMutation, DeletePersonMutationVariables>;

/**
 * __useDeletePersonMutation__
 *
 * To run a mutation, you first call `useDeletePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePersonMutation, { data, loading, error }] = useDeletePersonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePersonMutation(baseOptions?: Apollo.MutationHookOptions<DeletePersonMutation, DeletePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePersonMutation, DeletePersonMutationVariables>(DeletePersonDocument, options);
      }
export type DeletePersonMutationHookResult = ReturnType<typeof useDeletePersonMutation>;
export type DeletePersonMutationResult = Apollo.MutationResult<DeletePersonMutation>;
export type DeletePersonMutationOptions = Apollo.BaseMutationOptions<DeletePersonMutation, DeletePersonMutationVariables>;
export const SearchVolonteerDocument = gql`
    query searchVolonteer($cond: String) {
  searchVolonteer(cond: $cond) {
    elems {
      ...VolonteerAttributes
    }
  }
}
    ${VolonteerAttributesFragmentDoc}`;

/**
 * __useSearchVolonteerQuery__
 *
 * To run a query within a React component, call `useSearchVolonteerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchVolonteerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchVolonteerQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchVolonteerQuery(baseOptions?: Apollo.QueryHookOptions<SearchVolonteerQuery, SearchVolonteerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchVolonteerQuery, SearchVolonteerQueryVariables>(SearchVolonteerDocument, options);
      }
export function useSearchVolonteerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchVolonteerQuery, SearchVolonteerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchVolonteerQuery, SearchVolonteerQueryVariables>(SearchVolonteerDocument, options);
        }
export function useSearchVolonteerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchVolonteerQuery, SearchVolonteerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchVolonteerQuery, SearchVolonteerQueryVariables>(SearchVolonteerDocument, options);
        }
export type SearchVolonteerQueryHookResult = ReturnType<typeof useSearchVolonteerQuery>;
export type SearchVolonteerLazyQueryHookResult = ReturnType<typeof useSearchVolonteerLazyQuery>;
export type SearchVolonteerSuspenseQueryHookResult = ReturnType<typeof useSearchVolonteerSuspenseQuery>;
export type SearchVolonteerQueryResult = Apollo.QueryResult<SearchVolonteerQuery, SearchVolonteerQueryVariables>;
export const GetForUpdateVolonteerDocument = gql`
    mutation getForUpdateVolonteer($id: ID!) {
  packet {
    getVolonteer(id: $id) {
      ...VolonteerAttributes
    }
  }
}
    ${VolonteerAttributesFragmentDoc}`;
export type GetForUpdateVolonteerMutationFn = Apollo.MutationFunction<GetForUpdateVolonteerMutation, GetForUpdateVolonteerMutationVariables>;

/**
 * __useGetForUpdateVolonteerMutation__
 *
 * To run a mutation, you first call `useGetForUpdateVolonteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetForUpdateVolonteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getForUpdateVolonteerMutation, { data, loading, error }] = useGetForUpdateVolonteerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForUpdateVolonteerMutation(baseOptions?: Apollo.MutationHookOptions<GetForUpdateVolonteerMutation, GetForUpdateVolonteerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetForUpdateVolonteerMutation, GetForUpdateVolonteerMutationVariables>(GetForUpdateVolonteerDocument, options);
      }
export type GetForUpdateVolonteerMutationHookResult = ReturnType<typeof useGetForUpdateVolonteerMutation>;
export type GetForUpdateVolonteerMutationResult = Apollo.MutationResult<GetForUpdateVolonteerMutation>;
export type GetForUpdateVolonteerMutationOptions = Apollo.BaseMutationOptions<GetForUpdateVolonteerMutation, GetForUpdateVolonteerMutationVariables>;
export const CreateVolonteerDocument = gql`
    mutation createVolonteer($input: _CreateVolonteerInput!) {
  packet {
    createVolonteer(input: $input) {
      ...VolonteerAttributes
    }
  }
}
    ${VolonteerAttributesFragmentDoc}`;
export type CreateVolonteerMutationFn = Apollo.MutationFunction<CreateVolonteerMutation, CreateVolonteerMutationVariables>;

/**
 * __useCreateVolonteerMutation__
 *
 * To run a mutation, you first call `useCreateVolonteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVolonteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVolonteerMutation, { data, loading, error }] = useCreateVolonteerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVolonteerMutation(baseOptions?: Apollo.MutationHookOptions<CreateVolonteerMutation, CreateVolonteerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVolonteerMutation, CreateVolonteerMutationVariables>(CreateVolonteerDocument, options);
      }
export type CreateVolonteerMutationHookResult = ReturnType<typeof useCreateVolonteerMutation>;
export type CreateVolonteerMutationResult = Apollo.MutationResult<CreateVolonteerMutation>;
export type CreateVolonteerMutationOptions = Apollo.BaseMutationOptions<CreateVolonteerMutation, CreateVolonteerMutationVariables>;
export const UpdateVolonteerDocument = gql`
    mutation updateVolonteer($input: _UpdateVolonteerInput!) {
  packet {
    updateVolonteer(input: $input) {
      ...VolonteerAttributes
    }
  }
}
    ${VolonteerAttributesFragmentDoc}`;
export type UpdateVolonteerMutationFn = Apollo.MutationFunction<UpdateVolonteerMutation, UpdateVolonteerMutationVariables>;

/**
 * __useUpdateVolonteerMutation__
 *
 * To run a mutation, you first call `useUpdateVolonteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVolonteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVolonteerMutation, { data, loading, error }] = useUpdateVolonteerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVolonteerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVolonteerMutation, UpdateVolonteerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVolonteerMutation, UpdateVolonteerMutationVariables>(UpdateVolonteerDocument, options);
      }
export type UpdateVolonteerMutationHookResult = ReturnType<typeof useUpdateVolonteerMutation>;
export type UpdateVolonteerMutationResult = Apollo.MutationResult<UpdateVolonteerMutation>;
export type UpdateVolonteerMutationOptions = Apollo.BaseMutationOptions<UpdateVolonteerMutation, UpdateVolonteerMutationVariables>;
export const DeleteVolonteerDocument = gql`
    mutation deleteVolonteer($id: ID!) {
  packet {
    deleteVolonteer(id: $id)
  }
}
    `;
export type DeleteVolonteerMutationFn = Apollo.MutationFunction<DeleteVolonteerMutation, DeleteVolonteerMutationVariables>;

/**
 * __useDeleteVolonteerMutation__
 *
 * To run a mutation, you first call `useDeleteVolonteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVolonteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVolonteerMutation, { data, loading, error }] = useDeleteVolonteerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVolonteerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVolonteerMutation, DeleteVolonteerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVolonteerMutation, DeleteVolonteerMutationVariables>(DeleteVolonteerDocument, options);
      }
export type DeleteVolonteerMutationHookResult = ReturnType<typeof useDeleteVolonteerMutation>;
export type DeleteVolonteerMutationResult = Apollo.MutationResult<DeleteVolonteerMutation>;
export type DeleteVolonteerMutationOptions = Apollo.BaseMutationOptions<DeleteVolonteerMutation, DeleteVolonteerMutationVariables>;
export const SearchVolonteerEventRequestDocument = gql`
    query searchVolonteerEventRequest($cond: String) {
  searchVolonteerEventRequest(cond: $cond) {
    elems {
      ...VolonteerEventRequestAttributes
    }
  }
}
    ${VolonteerEventRequestAttributesFragmentDoc}`;

/**
 * __useSearchVolonteerEventRequestQuery__
 *
 * To run a query within a React component, call `useSearchVolonteerEventRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchVolonteerEventRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchVolonteerEventRequestQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchVolonteerEventRequestQuery(baseOptions?: Apollo.QueryHookOptions<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>(SearchVolonteerEventRequestDocument, options);
      }
export function useSearchVolonteerEventRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>(SearchVolonteerEventRequestDocument, options);
        }
export function useSearchVolonteerEventRequestSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>(SearchVolonteerEventRequestDocument, options);
        }
export type SearchVolonteerEventRequestQueryHookResult = ReturnType<typeof useSearchVolonteerEventRequestQuery>;
export type SearchVolonteerEventRequestLazyQueryHookResult = ReturnType<typeof useSearchVolonteerEventRequestLazyQuery>;
export type SearchVolonteerEventRequestSuspenseQueryHookResult = ReturnType<typeof useSearchVolonteerEventRequestSuspenseQuery>;
export type SearchVolonteerEventRequestQueryResult = Apollo.QueryResult<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>;
export const GetForUpdateVolonteerEventRequestDocument = gql`
    mutation getForUpdateVolonteerEventRequest($id: ID!) {
  packet {
    getVolonteerEventRequest(id: $id) {
      ...VolonteerEventRequestAttributes
    }
  }
}
    ${VolonteerEventRequestAttributesFragmentDoc}`;
export type GetForUpdateVolonteerEventRequestMutationFn = Apollo.MutationFunction<GetForUpdateVolonteerEventRequestMutation, GetForUpdateVolonteerEventRequestMutationVariables>;

/**
 * __useGetForUpdateVolonteerEventRequestMutation__
 *
 * To run a mutation, you first call `useGetForUpdateVolonteerEventRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetForUpdateVolonteerEventRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getForUpdateVolonteerEventRequestMutation, { data, loading, error }] = useGetForUpdateVolonteerEventRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForUpdateVolonteerEventRequestMutation(baseOptions?: Apollo.MutationHookOptions<GetForUpdateVolonteerEventRequestMutation, GetForUpdateVolonteerEventRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetForUpdateVolonteerEventRequestMutation, GetForUpdateVolonteerEventRequestMutationVariables>(GetForUpdateVolonteerEventRequestDocument, options);
      }
export type GetForUpdateVolonteerEventRequestMutationHookResult = ReturnType<typeof useGetForUpdateVolonteerEventRequestMutation>;
export type GetForUpdateVolonteerEventRequestMutationResult = Apollo.MutationResult<GetForUpdateVolonteerEventRequestMutation>;
export type GetForUpdateVolonteerEventRequestMutationOptions = Apollo.BaseMutationOptions<GetForUpdateVolonteerEventRequestMutation, GetForUpdateVolonteerEventRequestMutationVariables>;
export const CreateVolonteerEventRequestDocument = gql`
    mutation createVolonteerEventRequest($input: _CreateVolonteerEventRequestInput!) {
  packet {
    createVolonteerEventRequest(input: $input) {
      ...VolonteerEventRequestAttributes
    }
  }
}
    ${VolonteerEventRequestAttributesFragmentDoc}`;
export type CreateVolonteerEventRequestMutationFn = Apollo.MutationFunction<CreateVolonteerEventRequestMutation, CreateVolonteerEventRequestMutationVariables>;

/**
 * __useCreateVolonteerEventRequestMutation__
 *
 * To run a mutation, you first call `useCreateVolonteerEventRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVolonteerEventRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVolonteerEventRequestMutation, { data, loading, error }] = useCreateVolonteerEventRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVolonteerEventRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateVolonteerEventRequestMutation, CreateVolonteerEventRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVolonteerEventRequestMutation, CreateVolonteerEventRequestMutationVariables>(CreateVolonteerEventRequestDocument, options);
      }
export type CreateVolonteerEventRequestMutationHookResult = ReturnType<typeof useCreateVolonteerEventRequestMutation>;
export type CreateVolonteerEventRequestMutationResult = Apollo.MutationResult<CreateVolonteerEventRequestMutation>;
export type CreateVolonteerEventRequestMutationOptions = Apollo.BaseMutationOptions<CreateVolonteerEventRequestMutation, CreateVolonteerEventRequestMutationVariables>;
export const UpdateVolonteerEventRequestDocument = gql`
    mutation updateVolonteerEventRequest($input: _UpdateVolonteerEventRequestInput!) {
  packet {
    updateVolonteerEventRequest(input: $input) {
      ...VolonteerEventRequestAttributes
    }
  }
}
    ${VolonteerEventRequestAttributesFragmentDoc}`;
export type UpdateVolonteerEventRequestMutationFn = Apollo.MutationFunction<UpdateVolonteerEventRequestMutation, UpdateVolonteerEventRequestMutationVariables>;

/**
 * __useUpdateVolonteerEventRequestMutation__
 *
 * To run a mutation, you first call `useUpdateVolonteerEventRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVolonteerEventRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVolonteerEventRequestMutation, { data, loading, error }] = useUpdateVolonteerEventRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVolonteerEventRequestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVolonteerEventRequestMutation, UpdateVolonteerEventRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVolonteerEventRequestMutation, UpdateVolonteerEventRequestMutationVariables>(UpdateVolonteerEventRequestDocument, options);
      }
export type UpdateVolonteerEventRequestMutationHookResult = ReturnType<typeof useUpdateVolonteerEventRequestMutation>;
export type UpdateVolonteerEventRequestMutationResult = Apollo.MutationResult<UpdateVolonteerEventRequestMutation>;
export type UpdateVolonteerEventRequestMutationOptions = Apollo.BaseMutationOptions<UpdateVolonteerEventRequestMutation, UpdateVolonteerEventRequestMutationVariables>;
export const DeleteVolonteerEventRequestDocument = gql`
    mutation deleteVolonteerEventRequest($id: ID!) {
  packet {
    deleteVolonteerEventRequest(id: $id)
  }
}
    `;
export type DeleteVolonteerEventRequestMutationFn = Apollo.MutationFunction<DeleteVolonteerEventRequestMutation, DeleteVolonteerEventRequestMutationVariables>;

/**
 * __useDeleteVolonteerEventRequestMutation__
 *
 * To run a mutation, you first call `useDeleteVolonteerEventRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVolonteerEventRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVolonteerEventRequestMutation, { data, loading, error }] = useDeleteVolonteerEventRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVolonteerEventRequestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVolonteerEventRequestMutation, DeleteVolonteerEventRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVolonteerEventRequestMutation, DeleteVolonteerEventRequestMutationVariables>(DeleteVolonteerEventRequestDocument, options);
      }
export type DeleteVolonteerEventRequestMutationHookResult = ReturnType<typeof useDeleteVolonteerEventRequestMutation>;
export type DeleteVolonteerEventRequestMutationResult = Apollo.MutationResult<DeleteVolonteerEventRequestMutation>;
export type DeleteVolonteerEventRequestMutationOptions = Apollo.BaseMutationOptions<DeleteVolonteerEventRequestMutation, DeleteVolonteerEventRequestMutationVariables>;