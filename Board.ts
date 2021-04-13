import Square from "./Square";

export default class Board {
	// Singleton instance
	private static instance: Board = new Board();

	private squares: Square[] = new Array<Square>();

	// Should not be able to init a new instance
	private Board() {}

	/**
	 * Returns the one and only instance of the board.
	 *
	 * @returns board
	 */
	public static getInstance(): Board {
		return this.instance;
	}

	/**
	 * Resets the board to start a new game
	 */
	public reset(): void {}
}
