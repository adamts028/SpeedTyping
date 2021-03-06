# Generated by Django 4.0.4 on 2022-05-29 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_score_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='score',
            options={'ordering': ['-typing_speed']},
        ),
        migrations.AlterField(
            model_name='score',
            name='accuracy',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='typing_speed',
            field=models.IntegerField(default=0),
        ),
    ]
