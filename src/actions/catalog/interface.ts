import { Action } from 'redux';

/* ------------- Define Actions and State ------------- */
export interface CatalogState {
	exampleData: string;
}

export enum TypesNames {
	SET_EXAMPLE = 'SET_EXAMPLE',
	MY_SAGA = 'MY_SAGA'
}

declare function SetExampleFunction(exampleData: string): SetExampleAction;
declare function MySagaFunction(someData: string): MySagaAction;

export interface ActionCreator {
	setExample: typeof SetExampleFunction;
	mySaga: typeof MySagaFunction;
}

export interface SetExampleAction extends Action<TypesNames.SET_EXAMPLE> {
	exampleData: string;
}

export interface MySagaAction extends Action<TypesNames.MY_SAGA> {
	someData: string;
}

/* ------------- Define Any Interfaces ------------- */
export interface ResponseExample {
	name: string;
}
