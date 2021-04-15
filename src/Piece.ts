import Board from "./Board";
import Square from "./Square";
import { ColorEnum } from "./types";

export default abstract class Piece {
	private _color: ColorEnum;
	private _square: Square;
	private _captured: boolean;

	/**
	 * Inits a new Piece
	 */
	constructor(color: ColorEnum, square: Square) {
		this._color = color;
		this._square = square;
		this._captured = false;
	}

	get color() {
		return this._color;
	}

	get square() {
		return this._square;
	}

	get captured() {
		return this._captured;
	}

	set captured(cap: boolean) {
		this._captured = cap;
	}

	/**
	 * Returns true if the piece is captured.
	 *
	 * @returns boolean
	 */
	isCaptured(): boolean {
		return this._captured;
	}

	/**
	 * Checks if the square is a square that the piece can move to legally.
	 *
	 * @param {Square} newSquare The square to check
	 */
	abstract isValidSquare(newSquare: Square): boolean;

	/**
	 * Moves the piece to the new square, provided if its legal to do so
	 *
	 * @throws {Error} if the move is illegal
	 *
	 * @param {Square} newSquare The Square to move to
	 */
	moveTo(newSquare: Square): void {
		if (!this.isValidSquare(newSquare))
			throw new Error("Illegal Square, cannot move here.");

		this._square = newSquare;
	}

	/**
	 * Returns a list of all squares the piece can legally move to
	 *
	 * @returns {Square[]} Array of all squares that the piece can legally move to from current pos
	 */
	getAvailableSquares(): Square[] {
		return this._square.board.squares.filter(square =>
			this.isValidSquare(square)
		);
	}
}
