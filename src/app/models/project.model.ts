export class Project {
  public amountRaised: number = 0;
  constructor(public title: string,
    public description: string,
    public founders: string[],
    public donors: string[],
    public categories: string[],
    public amountToRaise: number,
  ) {}
}
