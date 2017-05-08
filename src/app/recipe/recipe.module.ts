export class Recipe {
  public name : string;
  public description : string;
  public imagepath : string;
  public categories : [string];
  public ingredients : [string];
  public miseenplace : [string];
  public preparation : [string];

  constructor(name : string, description : string, imagepath : string) {
    this.name = name;
    this.description = description;
    this.imagepath = imagepath;
  }
}
