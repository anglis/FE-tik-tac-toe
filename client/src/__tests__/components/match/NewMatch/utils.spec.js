import { checkForWinner } from "../../../../components/match/NewMatch/utils";

describe.only("Test suite for game logic", () => {
  it("should return GameStatus object", () => {
    expect(checkForWinner()).toEqual({ isFinished: false, wonBy: undefined });
  });

  it("should be finished if moves length is 9", () => {
    expect(checkForWinner(Array.from(Array(9).keys()))).toEqual({
      isFinished: true,
      wonBy: undefined,
    });
  });

  it("should win nougts if first row is only noughts", () => {
    expect(
      checkForWinner([
        { order: 1, column: 1, row: 1, type: "noughts" },
        { order: 2, column: 1, row: 2, type: "crosses" },
        { order: 3, column: 3, row: 1, type: "noughts" },
        { order: 4, column: 2, row: 2, type: "crosses" },
        { order: 5, column: 2, row: 1, type: "noughts" },
      ])
    ).toEqual({
      isFinished: true,
      wonBy: "noughts",
    });
  });

  it("should win crosses if second row is only crosses", () => {
    expect(
      checkForWinner([
        { order: 1, row: 1, column: 1, type: "noughts" },
        { order: 3, row: 3, column: 2, type: "noughts" },
        { order: 6, row: 1, column: 3, type: "noughts" },

        { order: 2, row: 2, column: 1, type: "crosses" },
        { order: 4, row: 2, column: 2, type: "crosses" },
        { order: 5, row: 2, column: 3, type: "crosses" },
      ])
    ).toEqual({
      isFinished: true,
      wonBy: "crosses",
    });
  });

  it("should win noughts if second column is only noughts", () => {
    expect(
      checkForWinner([
        { order: 1, row: 2, column: 1, type: "noughts" },
        { order: 3, row: 2, column: 2, type: "noughts" },
        { order: 6, row: 2, column: 3, type: "noughts" },

        { order: 2, row: 2, column: 1, type: "crosses" },
        { order: 4, row: 3, column: 1, type: "crosses" },
        { order: 5, row: 2, column: 3, type: "crosses" },
      ])
    ).toEqual({
      isFinished: true,
      wonBy: "noughts",
    });
  });

  it("should win noughts if diagnal one way", () => {
    expect(
      checkForWinner([
        { order: 1, row: 1, column: 1, type: "noughts" },
        { order: 3, row: 2, column: 2, type: "noughts" },
        { order: 6, row: 3, column: 3, type: "noughts" },

        { order: 2, row: 2, column: 1, type: "crosses" },
        { order: 4, row: 3, column: 1, type: "crosses" },
        { order: 5, row: 2, column: 3, type: "crosses" },
      ])
    ).toEqual({
      isFinished: true,
      wonBy: "noughts",
    });
  });

  it("should win crosses if diagnal another way", () => {
    expect(
      checkForWinner([
        { order: 1, row: 2, column: 1, type: "noughts" },
        { order: 3, row: 2, column: 3, type: "noughts" },
        { order: 6, row: 1, column: 1, type: "noughts" },

        { order: 2, row: 1, column: 3, type: "crosses" },
        { order: 4, row: 2, column: 2, type: "crosses" },
        { order: 5, row: 3, column: 1, type: "crosses" },
      ])
    ).toEqual({
      isFinished: true,
      wonBy: "crosses",
    });
  });

  it("should win crosses if diagnal another way", () => {
    expect(
      checkForWinner([
        {
          id: 87,
          row: 3,
          column: 1,
          type: "noughts",
          order: 0,
          matchId: 27,
          createdAt: "2021-11-24T21:55:32.000Z",
          updatedAt: "2021-11-24T21:55:32.000Z",
        },
        {
          id: 88,
          row: 3,
          column: 2,
          type: "crosses",
          order: 1,
          matchId: 27,
          createdAt: "2021-11-24T21:55:32.000Z",
          updatedAt: "2021-11-24T21:55:32.000Z",
        },
        {
          id: 89,
          row: 2,
          column: 2,
          type: "noughts",
          order: 2,
          matchId: 27,
          createdAt: "2021-11-24T21:55:33.000Z",
          updatedAt: "2021-11-24T21:55:33.000Z",
        },
      ])
    ).toEqual({
      isFinished: false,
      wonBy: undefined,
    });
  });
  it("should win crosses if diagnal another way", () => {
    expect(
      checkForWinner([
        {
          id: 106,
          row: 3,
          column: 1,
          type: "noughts",
          order: 0,
          matchId: 31,
          createdAt: "2021-11-24T22:02:25.000Z",
          updatedAt: "2021-11-24T22:02:25.000Z",
        },
        {
          id: 107,
          row: 3,
          column: 2,
          type: "crosses",
          order: 1,
          matchId: 31,
          createdAt: "2021-11-24T22:02:26.000Z",
          updatedAt: "2021-11-24T22:02:26.000Z",
        },
        {
          id: 108,
          row: 2,
          column: 2,
          type: "noughts",
          order: 2,
          matchId: 31,
          createdAt: "2021-11-24T22:02:27.000Z",
          updatedAt: "2021-11-24T22:02:27.000Z",
        },
        {
          id: 109,
          row: 2,
          column: 3,
          type: "crosses",
          order: 3,
          matchId: 31,
          createdAt: "2021-11-24T22:02:28.000Z",
          updatedAt: "2021-11-24T22:02:28.000Z",
        },
        {
          id: 110,
          row: 1,
          column: 2,
          type: "noughts",
          order: 4,
          matchId: 31,
          createdAt: "2021-11-24T22:02:29.000Z",
          updatedAt: "2021-11-24T22:02:29.000Z",
        },
      ])
    ).toEqual({
      isFinished: false,
      wonBy: undefined,
    });
  });
});
