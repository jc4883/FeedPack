# Generated by Django 3.1 on 2020-09-04 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feedback', '0002_auto_20200903_0609'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedback',
            name='title',
            field=models.CharField(default='', max_length=100),
        ),
    ]
