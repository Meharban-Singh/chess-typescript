import { ColorEnum, FileEnum } from "./types";
import Piece from "./Piece";
import Board from "./Board";

export default class Square {
	private _rank: number;
	private _file: FileEnum;
	private _color: ColorEnum;
	private _piece: Piece | null;
	private _board: Board = Board.getInstance();

	/**
	 * Inits a new Square
	 *
	 * @param file
	 * @param rank
	 */
	constructor(file: FileEnum, rank: number) {
		this._file = file;
		this._rank = rank;
		this._piece = null;

		// If sum of rank and file is even. then its a black square
		this._color =
			(file + rank) % 2 === 0 ? ColorEnum.Black : ColorEnum.White;
	}

	get rank(): number {
		return this.rank;
	}

	get file(): FileEnum {
		return this._file;
	}

	get Color(): ColorEnum {
		return this._color;
	}

	get piece(): Piece | null {
		return this._piece;
	}

	get board(): Board {
		return this._board;
	}

	set piece(piece: Piece | null) {
		this._piece = piece;
	}

	/**
	 * Returns true if the square has a piece on it
	 *
	 * @returns boolean
	 */
	isOccupied(): boolean {
		return this._piece !== null;
	}
}
