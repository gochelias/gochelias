/**
 * Views table
 */
export interface Views {
	/**
	 * Article identifier
	 */
	slug: string;
	/**
	 * Views counter
	 */
	count: number;
}

/**
 * Contains all the tables in the database
 */
export interface Database {
	views: Views;
}
