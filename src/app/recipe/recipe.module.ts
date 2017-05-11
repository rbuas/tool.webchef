export class Recipe {
  public id : string;
  public name : string;
  public description : string;
  public imagepath : string;
  public categories : [string];
  public ingredients : [string];
  public miseenplace : [string];
  public preparation : [string];

  constructor(id : string, name : string, description : string, imagepath : string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagepath = imagepath;
  }
}
